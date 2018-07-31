import { AbstractControl, FormControl } from '@angular/forms';

export function validateMail(control: FormControl) {
    let pattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,4}$";

    if(!control.value.match(pattern) ) {
        return {defaultvalue:true}
    }
    // return {defaultvalue:false}
}