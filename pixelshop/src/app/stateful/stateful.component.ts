import { Component, OnInit, ViewChild } from '@angular/core'; //importancion de ViewChild para manejar al componente hijo
import { ConfirmComponent } from '../confirm/confirm.component';
import { Product } from '../interface/product'; // importamos la interface product
import { Shop } from '../models/shop.model'; // importamos nuestro modelo shop


@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {
  /* exportamos el ViewChild, le pasamos por parametro el componente confirm
  y le decimos que que confirmChild es del tipo ConfirmComponent */
  @ViewChild(ConfirmComponent, {static: false}) 
  confirmChild: ConfirmComponent;

  shopModel: Shop = new Shop(); // declaramos shopModel, para nuestro modelo de shop, es decir los datos
  boughtItems: Array<Product>; // declaramos boughtItems, para product es la interface y va a ser un array que recibe un producto

  /* AQUI EN EL CONSTRUCTOR AÑADIMOS boughtItems PARA QUE SE VAYA
  LISTANDO NUESTRO CARRITO DE LA COMPRA */
  constructor() {
    this.boughtItems = [];
  }

  ngOnInit(): void {
  }

  /* creamos el evento clickItem que hemos creado en la vista */
  clickItem(_curso){
    this.boughtItems.push(_curso);
  }
  /*creamos el evento cursoMatriculado que hemos creado en la vista*/
  cursoMatriculado(_event: Product) { //el evento es una propiedad que recibimos desde la vista y es del tipo product
    this.clickItem(_event); //el elemento sobre el que se ha hecho click será el que recibamos desde la vista con el evento
    this.confirmChild.isDisabled = false; // activamos el boton: confirmChild, que es nuestro componente y le decimos que isDisable está en false
  }

  /* CARRITO DE LA COMPRA */
  /* metodo finalPrice para que devuelva el importe total de los productos que hay en el carrito*/
  finalPrice() {
    if (this.boughtItems) { //si hay productos comprados, esto es importante para que SÓLO SE MUESTRE SI HAY PRODUCTOS COMPRADOS
      return this.boughtItems.reduce( //devuelveme prev: valor previo, item que es el producto
        (prev: number, item: Product) => prev + item.price, 0 //y esto será igual a el prev + precio del producto y 0 es el indice inicial
      );
    }
  }
}
