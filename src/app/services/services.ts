import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  _id?: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services: Service[] = [
    {
      _id: 's1',
      title: 'Mould Design & Prototyping',
      description: 'From concept to reality, we provide comprehensive 3D mould design and rapid prototyping services to validate your components before mass production.',
      icon: 'LightBulbIcon',
    },
    {
      _id: 's2',
      title: 'High-Precision CNC Machining',
      description: 'Utilizing our state-of-the-art 5-axis CNC mills and EDM machines, we craft complex mould cavities and cores with sub-micron accuracy.',
      icon: 'WrenchScrewdriverIcon',
    },
    {
      _id: 's3',
      title: '2K & 3K Injection Moulding',
      description: 'Specializing in multi-material moulds (2K & 3K), we enable the creation of sophisticated parts with integrated soft-touch grips, seals, or multiple colors.',
      icon: 'CubeTransparentIcon',
    },
    {
      _id: 's4',
      title: 'Mould Maintenance & Repair',
      description: 'We offer comprehensive maintenance and repair services to extend the life of your tooling, ensuring consistent quality and performance over millions of cycles.',
      icon: 'ShieldCheckIcon',
    },
  ];

  getIconClass(iconName: string): string {
    const iconMap: { [key: string]: string } = {
      'LightBulbIcon': 'lightbulb',
      'WrenchScrewdriverIcon': 'wrench-screwdriver',
      'CubeTransparentIcon': 'cube-transparent',
      'ShieldCheckIcon': 'shield-check'
    };
    return iconMap[iconName] || 'cog';
  }
}
