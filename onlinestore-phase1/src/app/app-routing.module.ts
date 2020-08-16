import { StoreModule } from '../components/store/store.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeFirstGuard } from './homefirst.guard';
import { AuthGuard } from './auth.guard';

import { CartmanagerComponent } from '../components/components.module';
import { CheckoutComponent } from '../components/components.module';
import { StoreComponent } from '../components/components.module';
import { AdminComponent } from '../components/components.module';
import { LoginComponent } from 'src/components/login/login.component';

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
    path:'admin',
    component: AdminComponent,
    outlet: 'primary',
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component: LoginComponent,
    outlet: 'primary'
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


