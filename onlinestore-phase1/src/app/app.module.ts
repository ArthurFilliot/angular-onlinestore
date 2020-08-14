import { StoreComponent,CartmanagerComponent,CheckoutComponent } from '../components/components.module'; 

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule}  from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PipesModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
