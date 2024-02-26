import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { IProduct } from "../src/app/models/product";
import { ErrorService } from "./error.service";

@Injectable({
 providedIn: 'root'
})

export class ProductService {
 constructor(
  private http: HttpClient,
  private errorService: ErrorService
  ) {
 }

 getAll(): Observable<IProduct[]>{
   return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
   .pipe(catchError (this.errorHandler.bind(this)
   ))
 }
  errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError( () => error.message )
  }

}