import { RouterModule } from '@angular/router';
import { CartModel } from './cart.model';
import { ProductsService } from './products.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule}  from '@angular/common/http';
import { PipesModule } from "./pipes/pipes.module";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

import { CategoriesService } from './categories.service';
import { ProductshortdescComponent } from './productshortdesc/productshortdesc.component';
import { CartsummaryComponent } from './cartsummary/cartsummary.component';
import { CartmanagerComponent } from './cartmanager/cartmanager.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    ListComponent,
    ProductshortdescComponent,
    CartsummaryComponent,
    CartmanagerComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PipesModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    CategoriesService, ProductsService, CartModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
