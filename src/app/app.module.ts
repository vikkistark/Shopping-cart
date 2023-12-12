import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { LoginComponent } from './login/login.component';
import { ProductItemComponent } from './product-add-remove/product-item.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to 'login'
      { path: 'login', component: LoginComponent },
      { path: 'productList', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductItemComponent,
    LoginComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
  ],
  bootstrap: [AppComponent],
  providers: [CartService],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
