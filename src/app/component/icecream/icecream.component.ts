import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icecream',
  templateUrl: './icecream.component.html',
  styleUrls: ['./icecream.component.css']
})
export class IcecreamComponent implements OnInit {

  listShow = false;
    iceCreams = [
        {name : 'Green Tea', img: '/assets/img/icecream/greentea.jpg', price : 8, productid : 'i001'},
        {name : 'Venilla', img: '/assets/img/icecream/vanilla.jpg', price : 7, productid : 'i002'},
        {name : 'Chocolate', img: '/assets/img/icecream/chocolate.jpg', price : 7, productid : 'i003'}
    ];
    a_tag_cls =  '';
    shoppingCart = [];
  constructor() {
    this.getShoppingCart();
  }

  getShoppingCart() {
    const cart = localStorage.getItem('carts');
    if ( cart) {
      this.shoppingCart = JSON.parse(cart);
    }
  }
    showList() {
    this.listShow = !this.listShow;
    }
  ngOnInit() {
  }
    addToCart(item) {
    // this.shoppingCart.push(item);
        for ( let a = 0; a < this.shoppingCart.length; a++) {
            if ( item.productid === this.shoppingCart[a].productid) {
              this.shoppingCart[a].quantity++;
              return true;
            }
        }
        this.shoppingCart.push(item);
        this.shoppingCart[(this.shoppingCart.length - 1)]['quantity'] = 1;
        localStorage.setItem('carts', JSON.stringify(this.shoppingCart));
    console.log(this.shoppingCart);
    }
    getCartTotal() {
    let totalAmount = 0;
    if ( this.shoppingCart.length === 0) {
      return 0;
    } else {
      for ( let a = 0; a < this.shoppingCart.length; a++) {
        totalAmount += this.shoppingCart[a].price * this.shoppingCart[a].quantity;
      }
      return totalAmount;
    }
    }

    addClass() {
    // console.log('add clsa');
        this.a_tag_cls = 'item_focused';
    }
    addItem(i) {
      this.shoppingCart[i].quantity++;
      localStorage.setItem('carts', JSON.stringify(this.shoppingCart));
    }
    deleteItem(i) {
      this.shoppingCart.splice(i, 1);
        localStorage.setItem('carts', JSON.stringify(this.shoppingCart));
    }
}
