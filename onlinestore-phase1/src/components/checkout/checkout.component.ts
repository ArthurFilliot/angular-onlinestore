import { Order } from '../componentsservices.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit { 

  constructor(order:Order) { }

  ngOnInit(): void {
  }

}
