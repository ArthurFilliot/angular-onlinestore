import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from './../products.service';
import { CartModel, CartBO } from '../../cart.model';
import { Router } from '@angular/router';
import { Product } from 'src/app/product.interface';

@Component({
  selector: 'app-productshortdesc',
  templateUrl: './productshortdesc.component.html',
  styleUrls: ['./productshortdesc.component.css']
})
export class ProductshortdescComponent implements OnInit {

  @Input('id') id:number

  product: Product

  constructor(private productsService:ProductsService, private cart:CartModel, private router:Router) { 
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
    this.router.navigateByUrl("/cart");
  }

}
