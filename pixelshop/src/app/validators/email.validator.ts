import { AbstractControl } from '@angular/forms';

/* exportamos la funcion ValidateUrl y le pasamos el tipo control:AbstractControl,
le decimos que si contro value NO EMPIEZA CON https O no incluye .com devuelve un true,
si no, si cumple las dos condiciones es decir empieza por https o incluye .com, al ser
válido devuelve un NULL */
export function ValidateEmail(control:AbstractControl) {
    if (!control.value.includes('.com', '.es', '@' || !control.value.notIncludes('muyoc.com'))){
        return {ValidateEmail: true};
    }
    return null;
}