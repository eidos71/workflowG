import { MyErrorDirectiveDirective } from './my-error-directive.directive';
import { ElementRef } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { mockElementRef } from './mockElementRef';

xdescribe('MyErrorDirectiveDirective', () => {

  let el: mockElementRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [],
      providers:[{provide: ElementRef, useClass: mockElementRef}]        
    })    
    .compileComponents();
  }));

  beforeEach(() => {
    el = new mockElementRef();
  });


  it('should have native element', () => {
    
  }),

  it('should create an instance', () => {
    const directive = new MyErrorDirectiveDirective(el);
    expect(directive).toBeTruthy();
  });
});
