import { OrdersService } from '../componentsservices.module';
import { Order } from '../componentsservices.module';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit { 

  orderSent:boolean = false
  submitted:boolean = false
  constructor(public order:Order, public ordersService: OrdersService) { }

  ngOnInit(): void {
  }

  submitOrder(form: NgForm) {
    this.submitted=true;
    if (form.valid) {
      this.ordersService.saveOrder(this.order)
      .subscribe(order => {
        this.order.clear()
        this.orderSent=true
        this.submitted=false
      })
    }
  }
}
