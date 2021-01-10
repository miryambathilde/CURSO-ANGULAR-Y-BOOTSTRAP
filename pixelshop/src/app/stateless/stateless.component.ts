import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; //incorporamos output, que es un evento, y EventEmitter que es un emisor de evento
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent implements OnInit {
  /* cursomatriculado sera un evento que contiene el producto, el producto en el cual la persona se ha matriculado  */
  @Output () cursomatriculado: EventEmitter<Product> = new EventEmitter(); //OUTPUT para el curso donde se matricula, que es el EventEmitter y le pasamos un producto
  @Input() product: Product; //INPUT donde incorporamos product mendiante la interface de arriba//
  public matricula: string;
  private disable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.matricula = `Matricularse`;

  }
  matricularse() {
    this.disable = true;
    this.matricula = '¡Matriculado!';
    this.cursomatriculado.emit(this.product); //esto va a lanzar nuestro producto a la aplicacion, el padre lo recibirá este evento y entonces lo mostrará en el carrito

  }
  isdisabled() {
    return !!this.disable;
  }
}