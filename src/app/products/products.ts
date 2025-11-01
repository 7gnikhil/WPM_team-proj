import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  _id?: string;
  name: string;
  category: 'End Component' | 'Tools/Machines';
  description: string;
  imageUrl: string;
  gallery?: string[];
  updatedAt: Date;
}

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  @Input() category: 'All' | 'End Component' | 'Tools/Machines' = 'All';
  @Input() title: string = 'Products';

  @Output() productSelected = new EventEmitter<Product>();

  products: Product[] = [
    { _id: '1', name: 'Complex Automotive Mould', category: 'Tools/Machines', description: 'A complex, two-shot (2K) mould for a next-gen vehicle dashboard, manufactured with high-grade tool steel.', imageUrl: 'https://trumould.com/wp-content/uploads/2023/08/automotive-injection-moulding.jpg', gallery: ['https://www.fictiv.com/wp-content/uploads/2023/11/Large-plastic-parts-jpg.webp', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6baIV3JsjnuHaNAG89rmqdOlx6BYb8Njzg&s', 'https://d2n4wb9orp1vta.cloudfront.net/cms/brand/mmt/2022-mmt/mmt-1122-hrsflow-1.jpg%3BmaxWidth%3D385'], updatedAt: new Date('2024-09-15') },
    { _id: '2', name: 'High-Cavitation Pharma Mould', category: 'Tools/Machines', description: 'High-precision 64-cavity mould for manufacturing medical-grade polypropylene syringe barrels.', imageUrl: 'https://www.cavitymold.com/wp-content/uploads/2025/06/what-are-the-diffe.webp', gallery: ['https://www.asaclean.com/hs-fs/hubfs/high%20cav%20mold.jpg?width=640&height=500&name=high%20cav%20mold.jpg', 'https://5.imimg.com/data5/VR/JW/MY-3837926/plastic-injection-molding-500x500.jpg'], updatedAt: new Date('2024-08-20') },
    { _id: '4', name: 'Haas VF-4SS CNC Machine', category: 'Tools/Machines', description: 'High-performance Vertical Machining Center for rapid and precise mould creation.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqlYwT2EaIHP-8TfxX8oEWdYGXrGWECWkLpA&s', gallery: ['https://cdn.cncmachines.com/2021/January/2014-HAAS-VF4SS-1610989101508'], updatedAt: new Date('2023-01-10') },
    { _id: '5', name: 'Industrial Connector Component', category: 'End Component', description: 'Robust connector part for heavy-duty industrial machinery, made with glass-filled nylon.', imageUrl: 'https://cpimg.tistatic.com/07651469/b/4/Heavy-Duty-Industrial-Connector.jpg', gallery: ['https://www.adminstrumentengineering.com.au/files/components_of_an_industrial_modular_connector.png'], updatedAt: new Date('2024-07-05') },
  ];

  activeProduct: Product | null = null;
  activeImages: string[] = [];
  activeIndex: number = 0;

  get filteredProducts(): Product[] {
    return this.category === 'All'
      ? this.products
      : this.products.filter((p) => p.category === this.category);
  }

  openGallery(product: Product): void {
    this.activeProduct = product;
    const gallery = Array.isArray(product.gallery) ? product.gallery : [];
    const unique = [product.imageUrl, ...gallery.filter((g) => g && g !== product.imageUrl)];
    this.activeImages = unique;
    this.activeIndex = 0;
    this.productSelected.emit(product);
  }

  closeGallery(): void {
    this.activeProduct = null;
    this.activeImages = [];
    this.activeIndex = 0;
  }

  prevImage(evt?: Event): void {
    if (evt) evt.stopPropagation();
    if (!this.activeImages.length) return;
    this.activeIndex = (this.activeIndex - 1 + this.activeImages.length) % this.activeImages.length;
  }

  nextImage(evt?: Event): void {
    if (evt) evt.stopPropagation();
    if (!this.activeImages.length) return;
    this.activeIndex = (this.activeIndex + 1) % this.activeImages.length;
  }

  goTo(index: number, evt?: Event): void {
    if (evt) evt.stopPropagation();
    if (index >= 0 && index < this.activeImages.length) this.activeIndex = index;
  }

  onProductClick(product: Product): void {
    this.openGallery(product);
  }
}
