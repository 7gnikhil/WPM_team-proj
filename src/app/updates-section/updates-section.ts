import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Update {
  _id?: string;
  title: string;
  description: string;
  date: string;
}

@Component({
  selector: 'app-updates-section',
  imports: [CommonModule],
  templateUrl: './updates-section.html',
  styleUrl: './updates-section.css',
})
export class UpdatesSection {
  updates: Update[] = [
    { _id: 'u1', title: 'New High-Strength Polymer Acquired', description: 'We are now using PEEK polymer for high-temperature applications, enhancing component durability.', date: '2024-10-26' },
    { _id: 'u2', title: '5-Axis CNC Machine Added to Workshop', description: 'Our new 5-axis CNC machine allows for more complex geometries and faster production times.', date: '2024-10-22' },
    { _id: 'u3', title: 'Expanded capacity for pharma moulds', description: 'We have successfully expanded our cleanroom facilities to meet the growing demand for medical and pharma-grade moulds.', date: '2024-10-15' },
  ];
}
