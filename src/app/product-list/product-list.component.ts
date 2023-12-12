import { Component } from '@angular/core';

import { products } from '../products';
import { ProductService } from '../productService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.products$.subscribe((products) => {
      this.products = products;
      console.log('Observable data ', products);
    });
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
