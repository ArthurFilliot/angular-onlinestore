import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
'use strict';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) { }

  getData(categoryid: number) {
    let path = `/assets/category_${categoryid}.json`
    return this.http.get<Category>(path).pipe(catchError(this.showError));
  }


  showError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('client side error', errorResponse.error.message)
    }else{
      console.error('server side error', errorResponse.error.message)
    }
    return throwError('Please try again,')
  }

  nullCategory(): Category {
    return {"id":0,"name":"",items:[]}
  };

}


export interface Category {
  id: number,
  name: string,
  items: any[]
}
