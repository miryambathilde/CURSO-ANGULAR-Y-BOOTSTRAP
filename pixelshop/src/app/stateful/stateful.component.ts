import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product'; // importamos la interface product
import { Shop } from '../models/shop.model'; // importamos nuestro modelo shop


@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {

  shopModel: Shop = new Shop(); // declaramos shopModel, para nuestro modelo de shop, es decir los datos
  boughtItems: Array<Product>; // declaramos boughtItems, para product es la interface y va a ser un array que recibe un producto

  constructor() { }

  ngOnInit(): void {
  }

  /* creamos el evento clickItem que hemos creado en la vista */
  clickItem(_curso){
    this.boughtItems.push(_curso);
  }
}
