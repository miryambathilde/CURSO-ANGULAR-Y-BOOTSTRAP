import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  /* PARA PODER USAR VALIDATORS PARA HACER VALIDACIONES, vamos a empezar a incorporar
  en user y las trataremos como una array con varios parámetros:
  CONCATENAMOS '' CON Validators.required, DE ESTE MODO le estoy
  diciendo que el campo user es requerido y con minLength le estamos diciendo
  que tiene que tener un mínimo de 3 caracteres */
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required]
    });
  }

  /* metodo onsubmit de la vista */
  onSubmit(_datosForm) {
    console.log(_datosForm.value);
  }
}

