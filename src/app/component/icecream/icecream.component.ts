import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icecream',
  templateUrl: './icecream.component.html',
  styleUrls: ['./icecream.component.css']
})
export class IcecreamComponent implements OnInit {

  listShow = false;
  constructor() { }

    showList() {
    this.listShow = !this.listShow;
    }
  ngOnInit() {
  }

}
