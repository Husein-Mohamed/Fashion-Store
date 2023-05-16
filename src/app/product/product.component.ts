import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent implements OnInit {

  products:any

  constructor(public pService:ProductService){}

  ngOnInit(): void {
    this.pService.getAllProducts().subscribe({
      next:(data)=>{this.products = data},
      error:(err)=>{console.log(err);}
    })
  }

}
