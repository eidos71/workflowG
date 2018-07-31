import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaListComponent } from './persona-list.component';
import { HttpClient } from '@angular/common/http';

describe('PersonaListComponent', () => {
  let component: PersonaListComponent;
  let fixture: ComponentFixture<PersonaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaListComponent ],
      imports: [
        HttpClient,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
