/* importamos Onchanges para detectar los cambios
importamos EventEmitter, porque vamos a emitir un evento para pasar la informacion de este componente a la aplicacion 
SimpleChanges, nos va a permitir a ver los cambios 
importamos los Input y el Output del EventEmmiter */
import { Component, Input, OnInit, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core'; 
import { Product } from '../interface/product'; //como vamos a estar dando información acerca del producto importamos product

@Component({
  selector: 'app-status-cart',
  templateUrl: './status-cart.component.html',
  styleUrls: ['./status-cart.component.css']
})
/* añadimos el metodo OnChanges */
export class StatusCartComponent implements OnInit, OnChanges {

  /* aqui llamamos a todos los input y output que voy a necesitar llamar del EventEmitter:
  precio, shopModel (los productos) y añadimos el EventEmitter */
  @Input() price: number;
  @Input() shopModel: Array<Product>;
  @Output() add: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /* metodo ngOnChanges, y le pasamos por parametro al console.log los cambios  que son
  los input que hemos declarado más arriba*/

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  /* METODO CONFIRM, simplemente vamos a emitir que se ha confirmado una compra  */
  confirm() {
    this.add.emit();
  }
}
