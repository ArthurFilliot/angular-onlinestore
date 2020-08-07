import { Component, OnInit, Input } from '@angular/core';
import { ProductsService, Product } from './../products.service';
import { CartModel, CartBO } from '../cart.model';

@Component({
  selector: 'app-productshortdesc',
  templateUrl: './productshortdesc.component.html',
  styleUrls: ['./productshortdesc.component.css']
})
export class ProductshortdescComponent implements OnInit {

  @Input('id') id:number

  product: Product

  constructor(private productsService:ProductsService, private cart:CartModel) { 
    this.product = productsService.nullProduct()
  }

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.productsService.getData(this.id).subscribe(data => {
      this.product=data
    })
  }

  addProductToCart(product:Product) {
    let cartbo = new CartBO(this.cart) 
    cartbo.addLine(product)
  }

}
