import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloworldComponent } from './helloworld.component';

function helloWorld() {
  return 'Hello world';
}

describe('HelloworldComponent', () => {
  let component: HelloworldComponent;
  let fixture: ComponentFixture<HelloworldComponent>;

  let expected = "";

  beforeEach(() => {
    expected = "Hello world";
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloworldComponent ]
    })
    .compileComponents();
  }));

  afterEach(() => {
    expected = "";
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HelloworldComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // xit('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  
  // xit('Says Hello', () => {
  //   expect(component.sayHello()).toEqual("Hello world!");
  // });

  it('says hello pruebas', () => {
    expect(helloWorld()).toEqual(expected);
  });
});
