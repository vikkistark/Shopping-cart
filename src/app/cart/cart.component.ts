import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { ProductService } from '../productService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  products = [];
  totalCost = 0;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.products$.subscribe((products) => {
      this.products = products.filter((product) => product.quantity > 0);
      this.calculateTotalCost();
      console.log('Observable data ', products);
    });
  }

  calculateTotalCost() {
    this.totalCost = this.products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
