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

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PipesModule,
    FormsModule
  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
