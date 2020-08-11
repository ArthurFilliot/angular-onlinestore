import { StoreComponent } from './store/store.component';
import { HomeComponent } from './store/home/home.component';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule}  from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PipesModule } from "./pipes/pipes.module";
import { StoreModule } from "./store/store.module";

import { CartmanagerComponent } from './cartmanager/cartmanager.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
