import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs'
import { catchError, takeUntil } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnDestroy {

  private unsubscribe$ = new Subject<void>();
  
  constructor(private http: HttpClient) { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  showError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('client side error', errorResponse.error.message)
    }else{
      console.error('server side error', errorResponse.error.message)
    }
    return throwError('Please try again,')
  }

  getData(id: number) {
    let path = `/assets/product_${id}.json`
    return this.http
      .get<Product>(path)
      .pipe(takeUntil(this.unsubscribe$))
      .pipe(catchError(this.showError));
  }  

  nullProduct(): Product {
    return {id:0}
  };
}

export interface Product {
  id: number,
  name?: string,
  price?: number,
  shortdesc?: string,
  fulldesc?: string
}
