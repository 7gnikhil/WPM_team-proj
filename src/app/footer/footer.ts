import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  apiBaseUrl: string = 'http://localhost:5000';
  email: string = '';
  message: string = '';
  statusMessage: string = '';
  isSubmitting: boolean = false;
  currentYear: number = new Date().getFullYear();

  async handleInquirySubmit() {
    this.isSubmitting = true;
    this.statusMessage = '';

    try {
      const res = await fetch(`${this.apiBaseUrl}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.email, message: this.message })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Failed to send');
      this.statusMessage = data?.message || 'Inquiry sent successfully!';
      this.email = '';
      this.message = '';
    } catch (error) {
      console.error(error);
      this.statusMessage = 'Failed to send inquiry. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
