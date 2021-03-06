import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateEmail } from '../validators/email.validator';
import { ValidateUrl } from '../validators/url.validator'; //aqui importamos el validador que hemos creado

@Component({
  selector: 'app-formulariosegundo',
  templateUrl: './formulariosegundo.component.html',
  styleUrls: ['./formulariosegundo.component.css']
})
export class FormulariosegundoComponent implements OnInit {

  formulario: FormGroup; //formulario es del tipo FORMGROUP y será publico
  mipattern = '[a-z]*'; //añadimos mipattern, nuestro patron de nuestra expresion regular para el validador
  
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
      user: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.mipattern)]],//aqui concatenamos tambien nuestro mipattern, regex pattern
      password: ['', Validators.required],
      url:['', [Validators.required, ValidateUrl]], //añadimos el campo url y pasaremos nuestro propio validador ValidateUrl y lo ponemos como campo obligatorio
      email: ['', [Validators.required, ValidateEmail]] //añadimos email con su validador 
    });
  }

  /* metodo onsubmit de la vista */
  onSubmit(_datosForm) {
    console.log(_datosForm.value);
  }
}

