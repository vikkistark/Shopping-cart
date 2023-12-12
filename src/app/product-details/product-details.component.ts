import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';
import { ProductService } from '../productService';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute, private cartService: CartService,
    private productService: ProductService) { }

  // ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //     this.product = products[+params.get('productId')];
  //   });
  // }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = +params.get('productId'); // Convert string to number
      this.productService.products$.subscribe(products => {
        this.product = products.find(p => p.productId === productId);
      });
    });
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}