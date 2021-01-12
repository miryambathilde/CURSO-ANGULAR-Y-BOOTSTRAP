import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulariosegundo',
  templateUrl: './formulariosegundo.component.html',
  styleUrls: ['./formulariosegundo.component.css']
})
export class FormulariosegundoComponent implements OnInit {

  formulario: FormGroup; //formulario es del tipo FORMGROUP y será publico

  /* creamos una variable privada */
  constructor (private formBuilder: FormBuilder)  { }

  /* aqui creamos los datos que va a tener nuestro formbuilder */
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      user: 'Miusuario',
      password: '',
    })
  }

}
