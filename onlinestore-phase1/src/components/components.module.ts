
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { CheckoutComponent } from './checkout/checkout.component';
import { StoreComponent } from './store/store.component';
import { CartmanagerComponent } from './cartmanager/cartmanager.component';
import { StoreModule } from './store/store.module';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

export { PipesModule } from "../pipes/pipes.module";
export { CartmanagerComponent } from './cartmanager/cartmanager.component';
export { CheckoutComponent } from './checkout/checkout.component';
export { StoreComponent } from './store/store.component';
export { AdminComponent } from './admin/admin.component';

@NgModule({
    declarations: [
        CartmanagerComponent,
        CheckoutComponent,
        AdminComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule,
        StoreModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        CartmanagerComponent,
        CheckoutComponent,
        StoreComponent,
        AdminComponent
    ]
  })
export class ComponentsModule { }