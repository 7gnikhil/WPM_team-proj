import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavLink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navLinksLeft: NavLink[] = [
    { label: 'Products', route: '/products' },
    { label: 'End Components', route: '/end-components' },
    { label: 'Tools & Machines', route: '/tools-machines' }
  ];

  navLinksRight: NavLink[] = [
    { label: 'Services', route: '/services' },
    { label: 'About Us', route: '/about-us' },
    { label: 'Contact Us', route: '/contact-us' },
    { label: 'Careers', route: '/careers' }
  ];
}
