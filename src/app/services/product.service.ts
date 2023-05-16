import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly baseUrl = 'http://localhost:3000/products'

  constructor(private readonly client:HttpClient) { }

  getAllProducts(){
    return this.client.get(this.baseUrl)
  }

  getProductById(id:any){
    return this.client.get(`${this.baseUrl}/${id}`)
  }
}
