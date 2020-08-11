import { CartModel } from '../../cart.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartsummary',
  templateUrl: './cartsummary.component.html',
  styleUrls: ['./cartsummary.component.css']
})
export class CartsummaryComponent implements OnInit {

  constructor(public cart:CartModel) { }

  ngOnInit(): void {
  }

}
