import { NgModule } from '@angular/core';

export { Product, ProductsService } from './products.service';
export { Category, CategoriesService } from './categories.service';
export { CartModel, CartBO, CartLineModel } from './cart.model';
export { Order } from './order.model';
export { OrdersService } from './orders.service';
export { User } from './user.model';
export { UserService } from './user.service';
export { AuthenticationService } from './authentication.service';

export {environment} from '../environments/environment'

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