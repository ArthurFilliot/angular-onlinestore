import { Injectable } from '@angular/core';
import { Product } from './products.service';

@Injectable({providedIn:'root'})
export class CartModel {
    public lines: CartLineModel[] = []; 
    public itemcount: number = 0;
    public cartprice: number = 0;
}

export class CartLineModel {
    constructor(public product:Product, public quantity:number) {}
}

export class CartBO {
    constructor(public cart: CartModel) { }

    getLineTotalByIndex(i:number) {
        return this.getLineTotal(this.cart.lines[i]);
    }

    getLineTotal(line:CartLineModel) {
        return line.quantity * line.product.price;
    }

    addLine(product:Product, quantity:number=1) {
        let line = this.cart.lines.find(line => line.product.id==product.id)
        if (line!=undefined) {
            line.quantity+=quantity;
        }else{
            this.cart.lines.push(new CartLineModel(product,1))
        }
        this.recalc()
    }

    updateQuantity(product:Product, quantity:number=1) {
        let line = this.cart.lines.find(line => line.product.id==product.id)
        if (line!=undefined) {
            line.quantity=quantity;
        }
        this.recalc()
    }

    removeLine(id:number) {
        let index = this.cart.lines.findIndex(line => line.product.id=id)
        this.cart.lines.splice(index,1)
        this.recalc()
    }

    clear() {
        this.cart.lines=[]
        this.cart.itemcount=0;
        this.cart.cartprice=0;
    }

    private recalc() {
        let qtys = 
            this.cart.lines
                .map(l=>[l.quantity,this.getLineTotal(l)])
        if (qtys.length>0) {
            let sums = 
                qtys
                    .reduce((acc, curr) => [acc[0] + curr[0], acc[1] + curr[1]])
            this.cart.itemcount = sums[0];
            this.cart.cartprice = sums[1];
        }else{
            this.cart.itemcount = 0;
            this.cart.cartprice = 0;
        }
    }

}