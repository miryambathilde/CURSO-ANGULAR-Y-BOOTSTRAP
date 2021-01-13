import { ConfirmComponent } from '../confirm/confirm.component';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
 selector: 'app-stateful',
 templateUrl: './stateful.component.html',
 styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit, OnDestroy {

  @ViewChild(ConfirmComponent, {static: false})
  confirmChild: ConfirmComponent;

  errorHttp: boolean;
  shopModel: any;
  boughtItems: Array<Product>;

  private shopSubscription: Subscription;


 constructor(private http: HttpClient) {
   this.boughtItems = [];
   this.shopModel = {shopItems: []};
  }

 ngOnInit(): void {
  this.shopSubscription = this.http.get('assets/cursos.json').subscribe(
    (respuesta: Response) => { this.shopModel.shopItems  = respuesta; },
    (respuesta: Response) => { this.errorHttp  = true; }
  );
 }

 ngOnDestroy(): void {
   this.shopSubscription.unsubscribe();
 }

 clickItem(_curso) {
   this.boughtItems.push(_curso);
 }
 cursoMatriculado(_event: Product) {
   this.clickItem(_event);
   this.onConfirm(); //le decimos que muestre el alert del metodo OnConfirm cuando se matricule en un curso
   this.confirmChild.isDisabled = false;
 }

 finalPrice() {
   if (this.boughtItems) {
   return this.boughtItems.reduce(
     (prev: number, item: Product) => prev + item.price, 0
   );
 }
}
  //metodo onConfirm//
  onConfirm() {
    /* alert('Acabas de añadir un nuevo curso'); */
  }
}