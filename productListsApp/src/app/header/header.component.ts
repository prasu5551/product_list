import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appTitle = 'Coffee Products';
  fillerNav = [
    {name: 'product_list', label: 'Product List'},
    {name: 'product_details', label: 'Product Details'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
