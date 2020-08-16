import { NgModule } from '@angular/core';

export { Product, ProductsService ,
Category, CategoriesService,
CartModel, CartBO, CartLineModel,
Order,
OrdersService,
User,UserService,AuthenticationService } from '../services/services.module';

@NgModule({
    declarations: [
    ],
    imports: [
    ],
    providers: [],
    exports: [
    ]
  })
export class ComponentsServicesModule { }