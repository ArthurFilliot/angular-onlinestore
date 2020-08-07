import { CartmanagerComponent } from './cartmanager/cartmanager.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeFirstGuard } from './homefirst.guard';

const routes: Routes = [
  {
    path:'',
    component : HomeComponent,
    canActivate:[HomeFirstGuard]
  },
  {
    path:'category',
    component : CategoryComponent,
    canActivate:[HomeFirstGuard]
  },
  {
    path:'cart',
    component: CartmanagerComponent,
    canActivate:[HomeFirstGuard]
  },
  {
    path:'checkout',
    component: CheckoutComponent,
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


