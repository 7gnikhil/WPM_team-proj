import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProductsPage } from './products-page/products-page';
import { EndComponentsPage } from './end-components-page/end-components-page';
import { ToolsMachinesPage } from './tools-machines-page/tools-machines-page';
import { ServicesPage } from './services-page/services-page';
import { AboutUsPage } from './about-us-page/about-us-page';
import { ContactUsPage } from './contact-us-page/contact-us-page';
import { CareersPage } from './careers-page/careers-page';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'products', component: ProductsPage },
  { path: 'end-components', component: EndComponentsPage },
  { path: 'tools-machines', component: ToolsMachinesPage },
  { path: 'services', component: ServicesPage },
  { path: 'about-us', component: AboutUsPage },
  { path: 'contact-us', component: ContactUsPage },
  { path: 'careers', component: CareersPage },
];
