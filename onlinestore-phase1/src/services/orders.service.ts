import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { from } from 'rxjs';
import { CartModel, CartBO } from './cart.model';

@Injectable({providedIn:'root'})
export class OrdersService {

  constructor() { }

  saveOrder(order: Order) {
    console.log(JSON.stringify(order));
    return from([order]);
  }
}