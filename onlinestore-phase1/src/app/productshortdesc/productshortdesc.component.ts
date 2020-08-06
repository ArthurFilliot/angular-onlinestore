import { Component, OnInit, Input } from '@angular/core';
import { ProductsService, Product } from './../products.service';


@Component({
  selector: 'app-productshortdesc',
  templateUrl: './productshortdesc.component.html',
  styleUrls: ['./productshortdesc.component.css']
})
export class ProductshortdescComponent implements OnInit {

  @Input('id') id:number

  product: Product

  constructor(private productsService:ProductsService) { 
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

  



}
