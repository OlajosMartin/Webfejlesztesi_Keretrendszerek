import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterViewInit{

  //productObject? Array<any>;

  constructor(){}  //private productService: ProductService
  reload(){
  }
  ngOnInit(): void{
    /*this.productService.loadImageMeta('').subscribe((data)=>{
      this.productObject=data;
    });*/
  }
  ngAfterViewInit(): void {
    
  }
}
