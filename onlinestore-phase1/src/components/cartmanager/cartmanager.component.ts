import { CartModel, CartBO, CartLineModel } from '../componentsservices.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartmanager',
  templateUrl: './cartmanager.component.html',
  styleUrls: ['./cartmanager.component.css']
})
export class CartmanagerComponent  {

  cart:CartModel

  constructor(mcart:CartModel) {
    this.cart = mcart
  }

  update(line: CartLineModel, quantity:number) {
    (new CartBO(this.cart))
      .updateQuantity(line.product,quantity)
  }

  remove(line: CartLineModel) {
    (new CartBO(this.cart))
      .removeLine(line.product.id)
  }

}
