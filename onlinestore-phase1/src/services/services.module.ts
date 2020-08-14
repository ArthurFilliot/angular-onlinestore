import { NgModule } from '@angular/core';

export { Product, ProductsService } from './products.service';
export { Category, CategoriesService } from './categories.service';
export { CartModel, CartBO, CartLineModel } from './cart.model';
export { Order } from './order.model';
export { OrdersService } from './orders.service';

@NgModule({
    declarations: [
    ],
    imports: [
    ],
    providers: [],
    exports: [
    ]
  })
export class ServicesModule { }