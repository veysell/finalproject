import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
  apiUrl = 'https://localhost:44304/api/';
  
  constructor(private httpClient: HttpClient) { }


  //API connection
  getProducts():Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"products/getall";
   return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"products/getbycategory?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
   }

   add(product:Product){
    return this.httpClient.post(this.apiUrl+"products/add",product);
   }
}
