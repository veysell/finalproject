import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
  apiUrl = 'https://localhost:44304/api/products/getall';
  constructor(private httpClient: HttpClient) { }


  //API connection
  getProducts():Observable<ListResponseModel<Product>> {
   return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
}