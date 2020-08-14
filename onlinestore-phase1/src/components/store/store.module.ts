import { PipesModule } from './../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    RouterModule,
    PipesModule,
    BrowserModule
  ],
  exports: [
    StoreComponent
  ]
})
export class StoreModule { }
