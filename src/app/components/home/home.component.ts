import { Component, OnInit } from '@angular/core';
import { productsList } from './../../store'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  produts = productsList;
  productsInCart: number

  constructor() { }

  ngOnInit(): void {
    this.productsInCart = 0;

  }
  addToCard() {
    this.productsInCart++
  }

}
