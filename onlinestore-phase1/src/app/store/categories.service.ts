import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs'
import { catchError, takeUntil } from 'rxjs/operators'
'use strict';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService implements OnDestroy {
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

  getData(categoryid: number) {
    let path = `/assets/category_${categoryid}.json`
    return this.http
      .get<Category>(path)
      .pipe(takeUntil(this.unsubscribe$))
      .pipe(catchError(this.showError));
  }  

  nullCategory(): Category {
    return {id:0,name:"",itemids:[]}
  };

}


export interface Category {
  id: number,
  name: string,
  itemids: any[]
}
