import { CartModel, CartBO } from './cart.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class Order {
    public id:number;
    public name:string;
    public address:string;
    public city:string;
    public state:string;
    public zip:string;
    public country:string;
    public shipped:boolean = false;

    constructor(public cart:CartModel) {

    }

    clear() {
        this.id=null;
        this.name=this.address=this.city=null;
        this.state=this.zip=this.country=null;
        this.shipped=false;

        (new CartBO(this.cart)).clear();
    }
}