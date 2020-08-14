
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';


import { CheckoutComponent } from './checkout/checkout.component';
import { StoreComponent } from './store/store.component';
import { CartmanagerComponent } from './cartmanager/cartmanager.component';
import { StoreModule } from './store/store.module';

export { PipesModule } from "../pipes/pipes.module";
export { CartmanagerComponent } from './cartmanager/cartmanager.component';
export { CheckoutComponent } from './checkout/checkout.component';
export { StoreComponent } from './store/store.component';

@NgModule({
    declarations: [
        CartmanagerComponent,
        CheckoutComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule,
        StoreModule
    ],
    providers: [],
    exports: [
        CartmanagerComponent,
        CheckoutComponent,
        StoreComponent
    ]
  })
export class ComponentsModule { }