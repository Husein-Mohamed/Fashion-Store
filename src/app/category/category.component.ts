import { Component,OnInit } from '@angular/core';
import { categoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  category:any
  
  constructor(public cService:categoryService){}
  
  ngOnInit():void{
    this.cService.getAllCategory().subscribe({
      next:(data)=>{this.category = data;},
      error:(err)=>{console.log(err);}
    })
  }



}
