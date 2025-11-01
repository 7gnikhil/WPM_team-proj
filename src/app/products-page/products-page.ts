import { Component } from '@angular/core';
import { Products } from '../products/products';

@Component({
  selector: 'app-products-page',
  imports: [Products],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {

}
