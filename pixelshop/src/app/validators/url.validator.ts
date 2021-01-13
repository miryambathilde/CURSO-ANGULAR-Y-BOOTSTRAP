import { AbstractControl } from '@angular/forms';

/* exportamos la funcion ValidateUrl y le pasamos el tipo control:AbstractControl,
le decimos que si contro value NO EMPIEZA CON https O no incluye .com devuelve un true,
si no, si cumple las dos condiciones es decir empieza por https o incluye .com, al ser
válido devuelve un NULL */
export function ValidateUrl(control:AbstractControl) {
    if (!control.value.startsWith ('https') || !control.value.includes('.com')){
        return {validUrl: true};
    }
    return null;
}