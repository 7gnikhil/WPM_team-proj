import { Component } from '@angular/core';
import { Banner } from '../banner/banner';
import { UpdatesSection } from '../updates-section/updates-section';
import { Products } from '../products/products';

@Component({
  selector: 'app-home',
  imports: [Banner, UpdatesSection, Products],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
