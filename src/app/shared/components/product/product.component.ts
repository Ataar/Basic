import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // code of paragrapg
  public productName : string ='Samsung';
  public productId : number = 10;
  

  // code for ul list
 skills : Array<string> =["Javascript", "Angular", " HTML", "CSS"]
  constructor() {}

  ngOnInit(): void {
  }

}
