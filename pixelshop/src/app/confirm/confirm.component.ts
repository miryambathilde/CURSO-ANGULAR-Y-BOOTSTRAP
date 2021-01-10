import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  /*creamos la propiedad isDisabled para el confirm*/
  isDisabled: boolean;
  showModal: boolean;

  constructor() { 
    this.isDisabled = true; //por defecto queremos que ese boton esté deshabilitado
  }

  ngOnInit(): void {
  }
}
