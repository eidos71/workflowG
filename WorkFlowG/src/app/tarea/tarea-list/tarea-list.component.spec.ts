import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TareaListComponent } from './tarea-list.component';
import { EstadoTareaPipe } from '../../shared/pipes/estado-tarea.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TareaId } from '../shared/tarea-id';
import { DebugElement } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TareaService } from '../shared/tarea.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { routes } from '../../app-routing.module';




fdescribe('TareaListComponent', () => {


  let component: TareaListComponent;
  let fixture: ComponentFixture<TareaListComponent>;
  // Añado
  let pipe: EstadoTareaPipe;
  let tareas: TareaId[];
  let el: DebugElement;
  let http: HttpClient;
  let router: Router;
  let location: Location;
  let spy: any;
  let service: TareaService;
  let mockStyles = {
    color: 'red',
  };
  let mockTarea: TareaId = {id: "1", codigo: "TAR1", descripcion: "Creación componente tarea-list", aplicacion: "WorkFlowG", tipo: "Feature", estado: "Desarrollo", fechaAlta: "2018/05/10", usuario: "Rul", despliegue: "1.0" };
  
  let mockTareas: TareaId[] = [
    { id: "1", codigo: "TAR1", descripcion: "Creación componente tarea-list", aplicacion: "WorkFlowG", tipo: "Feature", estado: "Desarrollo", fechaAlta: "2018/05/10", usuario: "Rul", despliegue: "1.0" },
    { id: "2", codigo: "TAR2", descripcion: "Creación componente tarea-item", aplicacion: "WorkFlowG", tipo: "Feature", estado: "Desarrollo", fechaAlta: "2018/05/10", usuario: "Rul", despliegue: "1.0" }
  ];

  let mockTareas2: TareaId[] = [
    { id: "2", codigo: "TAR1", descripcion: "Creación componente tarea-list", aplicacion: "WorkFlowG", tipo: "Feature", estado: "Desarrollo", fechaAlta: "2018/05/10", usuario: "Rul", despliegue: "1.0" },
    { id: "3", codigo: "TAR2", descripcion: "Creación componente tarea-item", aplicacion: "WorkFlowG", tipo: "Feature", estado: "Desarrollo", fechaAlta: "2018/05/10", usuario: "Rul", despliegue: "1.0" }
  ];

  let mockEvent = {
    
    "row": {
      "id": 1,
      "código": "TAR1",
      "descripcion": "Creación componente tarea-list",
      "aplicaion": "WorkFlowG",
      "tipo": "Feature",
      "height": 25
    },
    "type": "click",
    "column": {
      "name": "Value"
    }
  };

  let mockRow = {
    "height": 25
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule, NgxDatatableModule ],
      declarations: [ TareaListComponent, EstadoTareaPipe ], 
      providers:[ HttpClient]
    })
    .compileComponents();
    router = TestBed.get(Router);
    // location = TestBed.get(Location);
    fixture = TestBed.createComponent(TareaListComponent);
    component = fixture.componentInstance;
    // router.initialNavigation();
  }));

  beforeEach(() => {
    http = null;
    
    service = new TareaService(http);
    component = new TareaListComponent(service, router);
    pipe = new EstadoTareaPipe();    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save tareas when onInit()', () => {    
    spy = spyOn(service, 'getTareasHttp').and.returnValue(of(mockTareas));
    component.ngOnInit();
    expect(component.tareas).toBe(mockTareas);
    expect(component.temp).toBe(mockTareas);
    expect(component.rows).toBe(component.temp);
  });

  it('should save tareas when onChanges()', () => {
    spy = spyOn(service, 'getTareasHttp').and.returnValue(of(mockTareas));
    component.ngOnChanges();
    expect(component.tareas).toBe(mockTareas);
    expect(component.temp).toBe(mockTareas);
    expect(component.rows).toBe(component.temp);
  });

  // Realmente no estoy mirando si se borra la tarea, solo si se llama bien
  // al método del servicio y si se guardan las tareas y las filas como atributo
  // de la clase Tarea-list
  it('should delete tarea when onDelete()', () => {
    spy = spyOn(service, 'deleteTareaHttp').and.returnValue(of(mockTareas));
    component.onDelete(mockTarea);
    expect(component.tareas).toBe(mockTareas);    
    expect(component.rows).toBe(mockTareas);
  }); 

  // Compruevo si se llama al EventEmitter en el componente
  it('should select row when onSelect()', () => {
    spyOn(component.notifyTarea, 'emit').and.callThrough();
    component.onSelect(mockEvent);
    expect(component.notifyTarea.emit).toHaveBeenCalled();
  });

  it('should print tarea when print()', () => {
    spyOn(component.router, 'navigate').and.callThrough();
    component.print(mockTarea);
    expect(router.navigate).toHaveBeenCalledWith([`/tarea/print/${mockTarea.id}`]);
    // expect(location.path())
  });

  it('should return styles', () => {
    expect(component.setStyles()).toEqual(mockStyles);
  });

  it('should return row height 50 when not row', () => {
    expect(component.getRowHeight(null)).toBe(50);
  });

  it('should return row height 50 when undefined height', () =>{
    let mockRow = {};
    expect(component.getRowHeight(mockRow)).toBe(50);
  });

  it('should return row height 25 when defined', () => {
    expect(component.getRowHeight(mockRow)).toBe(25);
  });

  afterEach(() => {
    service = null;
    component = null;
    fixture = null;
  });

  // Añado
  // it('Al renderizar la lista de tareas, el estado de la primera tarea', ()=> {
  //   component.tareas = this.tareas;
  //   fixture.detectChanges();
  //   el = fixture.debugElement.query[...]

  // })

  // it('Al cargar la lista de dos tareas, la tabla contiene dos rows', () {
  //   component.tareas = this.tareas;
  //   fixture.detectChanges();
  //   el = fixture.debugElement.query(By.css('table tbody'));

  // });


});
