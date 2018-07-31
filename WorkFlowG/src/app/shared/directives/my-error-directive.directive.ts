import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[my-error]'
})
export class MyErrorDirectiveDirective {
  
  constructor(elr: ElementRef) { 
    elr.nativeElement.style.background='red';
  }

}
