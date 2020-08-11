import { StoreModule } from './store/store.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeFirstGuard } from './homefirst.guard';

import { CartmanagerComponent } from './cartmanager/cartmanager.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreComponent } from './store/store.component';
import { CategoryComponent } from './store/category/category.component';
import { HomeComponent } from './store/home/home.component';

const routes: Routes = [
  {
    path:'',
    component : StoreComponent,
    outlet: 'primary',
    canActivate:[HomeFirstGuard]
  },
  {
    path:'store',
    component : StoreComponent,
    outlet: 'primary',
    canActivate:[HomeFirstGuard]
  },
  {
    path:'cart',
    component: CartmanagerComponent,
    outlet: 'primary',
    canActivate:[HomeFirstGuard]
  },
  {
    path:'checkout',
    component: CheckoutComponent,
    outlet: 'primary',
    canActivate:[HomeFirstGuard]
  },
  {
    path:'*',
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HomeFirstGuard]
})
export class AppRoutingModule { }


