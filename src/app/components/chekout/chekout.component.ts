import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.scss']
})
export class ChekoutComponent implements OnInit {
  
  productsInCart: number

  constructor() { }

  ngOnInit(): void {
    this.productsInCart = 0;
  }

}
