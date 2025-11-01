import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us-page.html',
  styleUrl: './contact-us-page.css',
})
export class ContactUsPage implements OnInit {
  apiBaseUrl: string = 'http://localhost:5000';

  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  statusMessage: string = '';
  isSubmitting: boolean = false;

  inquiries: any[] = [];
  loadingMessages: boolean = false;

  ngOnInit(): void {
    this.loadInquiries();
  }

  async loadInquiries() {
    this.loadingMessages = true;
    try {
      const res = await fetch(`${this.apiBaseUrl}/api/inquiries`);
      const data = await res.json();
      this.inquiries = Array.isArray(data?.inquiries) ? data.inquiries : [];
    } catch (e) {
      console.error('Failed to load inquiries', e);
    } finally {
      this.loadingMessages = false;
    }
  }

  async submit() {
    this.isSubmitting = true;
    this.statusMessage = '';

    try {
      const payload: any = { name: this.name, email: this.email, subject: this.subject, message: this.message };
      const res = await fetch(`${this.apiBaseUrl}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Failed to send');

      this.statusMessage = data?.message || 'Message sent successfully!';
      this.name = this.email = this.subject = this.message = '';

      await this.loadInquiries();
    } catch (error) {
      console.error(error);
      this.statusMessage = 'Failed to send message. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
