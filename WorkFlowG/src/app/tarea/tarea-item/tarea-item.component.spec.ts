import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TareaItemComponent } from './tarea-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TareaService } from '../shared/tarea.service';
import { TareaId } from '../shared/tarea-id';
import { DebugElement } from '@angular/core';
import { EstadoTareaPipe } from '../../shared/pipes/estado-tarea.pipe';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('TareaItemComponent', () => {
  let component: TareaItemComponent;
  let fixture: ComponentFixture<TareaItemComponent>;
  let service: TareaService; 
  let http: HttpClient;
  let mockTarea: TareaId;
  mockTarea = { id: "1", codigo: "TAR1", descripcion: "Creación componente tarea-list", aplicacion: "WorkFlowG", tipo: "Feature", estado: "Desarrollo", fechaAlta: "2018/05/10", usuario: "Rul", despliegue: "1.0" };
  let e: DebugElement;
  let pipe: EstadoTareaPipe;
  let router: Router;
  let mockTareas: TareaId[] = [
    { id: "1", codigo: "TAR1", descripcion: "Creación componente tarea-list", aplicacion: "WorkFlowG", tipo: "Feature", estado: "Desarrollo", fechaAlta: "2018/05/10", usuario: "Rul", despliegue: "1.0" },
    { id: "2", codigo: "TAR2", descripcion: "Creación componente tarea-item", aplicacion: "WorkFlowG", tipo: "Feature", estado: "Desarrollo", fechaAlta: "2018/05/10", usuario: "Rul", despliegue: "1.0" }
  ];
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, ReactiveFormsModule],
      declarations: [ TareaItemComponent, EstadoTareaPipe ],
      providers:[HttpClient, TareaService]        
    })    
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(TareaItemComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TareaService);
    component = new TareaItemComponent(service, router);
    fixture.detectChanges();
    pipe = new EstadoTareaPipe();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check tareaForm', () => {
    expect(component.tareaForm).toBeDefined();
    expect(component.tareaForm.valid).toBeFalsy();
    expect(component.tareaForm.controls.codigo.value).toBe('');
  });

  it('should be all empty when onNew()', () => {
    component.tarea = mockTarea;
    component.onNew();
    expect(component.tarea).toBeNull();
    component.tareaForm.controls['codigo'].setValue("Tarea1");
    expect(component.tareaForm.controls.codigo.value).toBe('Tarea1');
    component.tareaForm.controls['descripcion'].setValue("La mejor Tarea de todas");
    component.onNew();
    expect(component.tareaForm.controls.codigo.value).toBeNull();
  });
  // ME FALTA HACER BIEN EL ONCHANGES()
  it('should set values to tareaForm when onChanges()',() => {
    component.tarea = mockTarea;
    component.tareaForm.controls['codigo'].setValue("TAR1");    
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component.tareaForm.controls['codigo'].value).toEqual('TAR1');
    // el = fixture.debugElement.query(By.css('#codigo'));
    // expect(el.nativeElement.textContent).toEqual(component.tareaForm.controls.codigo.value);
  });

  // Hace un Spy al servicio y devuelve un observable fake de tareas
  // Comprueva que se haga el Notify.emit al padre
  it('Submiting a form emits Tarea when Tarea does not exist',() => {
    expect(component.tareaForm.valid).toBeFalsy();    
    component.tareaForm.controls['codigo'].setValue("Tarea1");
    component.tareaForm.controls['descripcion'].setValue("La mejor Tarea de todas");    
    expect(component.tareaForm.controls.codigo.value).toBe('Tarea1');
    expect(component.tareaForm.controls.descripcion.value).toBe('La mejor Tarea de todas');
    expect(component.tareaForm).toBeDefined();
    spyOn(service, 'insertarTareaHttp').and.returnValue(of(mockTareas));
    spyOn(component.notify, 'emit').and.callThrough();
    component.onSuccess();
    expect(component.notify.emit).toHaveBeenCalled();        
  });

  it('Submiting a form emits Tarea when Tarea exists', () => {
    expect(component.tareaForm.valid).toBeFalsy();    
    component.tareaForm.controls['codigo'].setValue("Tarea1");
    component.tareaForm.controls['descripcion'].setValue("La mejor Tarea de todas");    
    expect(component.tareaForm.controls.codigo.value).toBe('Tarea1');
    expect(component.tareaForm.controls.descripcion.value).toBe('La mejor Tarea de todas');
    expect(component.tareaForm).toBeDefined();
    component.tarea = mockTarea;
    spyOn(service, 'updateTareaHttp').and.returnValue(of(mockTareas));
    spyOn(component.notify, 'emit').and.callThrough();
    component.onSuccess();
    expect(component.notify.emit).toHaveBeenCalled();
  });

  it('should go to /personas when onReturn()', () => {
    spyOn(component.router, 'navigate').and.callThrough();
    component.onReturn();
    expect(router.navigate).toHaveBeenCalledWith([`/personas`]);
  });

  it('Codigo field validity', () => {
    let errors = {};
    let codigo = component.tareaForm.controls['codigo'];
    errors = codigo.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('Description field validity', () => {
    let errors = {};
    let description = component.tareaForm.controls['descripcion'];
    errors = description.errors || {};
    expect(errors['required']).toBeTruthy();
  });

});
