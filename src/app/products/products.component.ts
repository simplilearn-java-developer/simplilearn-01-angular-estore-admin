import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = [];

  constructor(){
    this.products = [{
      prodCode: 'PRD-ELE-1054',
      name: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
      desc: 'Easy upgrade for faster boot up, shutdown',
      price: 300
    }];
  }
}
