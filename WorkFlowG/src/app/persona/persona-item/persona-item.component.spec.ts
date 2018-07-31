import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaItemComponent } from './persona-item.component';

describe('PersonaItemComponent', () => {
  let component: PersonaItemComponent;
  let fixture: ComponentFixture<PersonaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

});
