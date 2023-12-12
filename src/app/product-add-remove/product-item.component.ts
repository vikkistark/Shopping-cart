import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../productService';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  @Input() product: any;
  @Input() productId: number;
  @Input() addCart: boolean;

  constructor(private productService: ProductService, private router: Router) {}

  increaseQuantity() {
    this.productService.increaseQuantity(this.productId);
  }

  decreaseQuantity() {
    this.productService.decreaseQuantity(this.productId);
  }

  addToCart() {
    this.productService.checkAndAddToCart(
      this.productId,
      this.product.quantity
    );
    this.router.navigate(['cart']);
  }
}
