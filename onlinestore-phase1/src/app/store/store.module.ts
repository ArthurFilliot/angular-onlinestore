import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule}  from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PipesModule } from "../pipes/pipes.module";
import { CartModel } from '../cart.model';
import { Product } from '../product.interface';


import { ProductsService } from './products.service';
import { CategoriesService } from './categories.service';

import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ProductshortdescComponent } from './productshortdesc/productshortdesc.component';
import { CartsummaryComponent } from './cartsummary/cartsummary.component';
import { StoreComponent } from './store.component';

@NgModule({
  declarations: [
    CategoryComponent,
    HomeComponent,
    ListComponent,
    ProductshortdescComponent,
    CartsummaryComponent,
    StoreComponent
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
  exports: []
})
export class StoreModule { }
