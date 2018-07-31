import {FormControl} from '@angular/forms';

export function ValidateDropdown(control: FormControl) {
    if(control.value == 0) {
        return { defaultValue: true  }
    }
    return null;
}
