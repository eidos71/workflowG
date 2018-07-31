import { ElementRef } from "@angular/core";

export class mockElementRef extends ElementRef {
    nativeElement = {style:null};
    
    constructor() {
        super(null);
    }
}