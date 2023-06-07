import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
  apiUrl = 'https://localhost:44304/api/products/getall';
  constructor(private httpClient: HttpClient) { }


  //API connection
  getProducts():Observable<ProductResponseModel> {
   return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}
