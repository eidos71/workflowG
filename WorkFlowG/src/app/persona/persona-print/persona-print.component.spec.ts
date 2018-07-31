import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaPrintComponent } from './persona-print.component';

describe('PersonaPrintComponent', () => {
  let component: PersonaPrintComponent;
  let fixture: ComponentFixture<PersonaPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
