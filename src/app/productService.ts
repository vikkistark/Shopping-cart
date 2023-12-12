// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { products } from './products';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductService {
//   private initialProducts = products;
//   private productsSubject = new BehaviorSubject(this.initialProducts);
//   products$ = this.productsSubject.asObservable();

//   increaseQuantity(productId: number) {
//     const updatedProducts = this.productsSubject.value.map((product) => {
//       if (product.productId === productId) {
//         return { ...product, quantity: product.quantity + 1 };
//       }
//       return product;
//     });

//     this.productsSubject.next(updatedProducts);
//   }

//   decreaseQuantity(productId: number) {
//     const updatedProducts = this.productsSubject.value.map((product) => {
//       if (product.productId === productId && product.quantity > 0) {
//         return { ...product, quantity: product.quantity - 1 };
//       }
//       return product;
//     });

//     this.productsSubject.next(updatedProducts);
//   }

//   checkAndAddToCart(productId: number, quantity: number) {
//     const updatedProducts = this.productsSubject.value.map((product) => {
//       if (product.quantity < 1)
//         if (product.productId === productId) {
//           return { ...product, quantity: product.quantity + 1 };
//         }
//       return product;
//     });

//     this.productsSubject.next(updatedProducts);
//   }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { products as initialProducts } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsSubject: BehaviorSubject<any[]>;
  private localStorageKey = 'products';

  constructor() {
    const storedProducts = this.getProductsFromLocalStorage();
    this.productsSubject = new BehaviorSubject(
      storedProducts || initialProducts
    );
    this.products$ = this.productsSubject.asObservable();
  }

  private getProductsFromLocalStorage() {
    const storedData = localStorage.getItem(this.localStorageKey);
    return storedData ? JSON.parse(storedData) : null;
  }

  private saveProductsToLocalStorage() {
    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(this.productsSubject.value)
    );
  }

  private updateProducts(updatedProducts: any[]) {
    this.productsSubject.next(updatedProducts);
    this.saveProductsToLocalStorage();
  }

  increaseQuantity(productId: number) {
    const updatedProducts = this.productsSubject.value.map((product) => {
      if (product.productId === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    this.updateProducts(updatedProducts);
  }

  decreaseQuantity(productId: number) {
    const updatedProducts = this.productsSubject.value.map((product) => {
      if (product.productId === productId && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });

    this.updateProducts(updatedProducts);
  }

  checkAndAddToCart(productId: number, quantity: number) {
    const updatedProducts = this.productsSubject.value.map((product) => {
      if (product.productId === productId) {
        return { ...product, quantity: product.quantity + quantity };
      }
      return product;
    });

    this.updateProducts(updatedProducts);
  }

  // ... other methods
}
