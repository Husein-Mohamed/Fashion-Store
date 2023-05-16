import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class categoryService {

  private readonly baseUrl = 'http://localhost:3000/category'

  constructor(public readonly client:HttpClient) { }

  getAllCategory(){
    return this.client.get(this.baseUrl)
  }

  getCategoryByID(id:any){
    return this.client.get(`${this.baseUrl}/${id}`)
  }  
}
