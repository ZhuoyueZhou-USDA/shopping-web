import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icecream',
  templateUrl: './icecream.component.html',
  styleUrls: ['./icecream.component.css']
})
export class IcecreamComponent implements OnInit {

  listShow = false;
    iceCreams = [
        {name : 'Green Tea', img: '/assets/img/icecream/greentea.jpg', price : 8},
        {name : 'Venilla', img: '/assets/img/icecream/vanilla.jpg', price : 7},
        {name : 'Chocolate', img: '/assets/img/icecream/chocolate.jpg', price : 7}
    ];
    shoppingCart = [];
  constructor() { }

    showList() {
    this.listShow = !this.listShow;
    }
  ngOnInit() {
  }
    addToCart(item) {
    this.shoppingCart.push(item);
    console.log(this.shoppingCart);
    }
}
