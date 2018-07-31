import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TareaComponent } from './tarea.component';
import { TareaId } from './shared/tarea-id';
import { TareaListComponent } from './tarea-list/tarea-list.component';
import { TareaItemComponent } from './tarea-item/tarea-item.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { TareaService } from './shared/tarea.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TareaPrintComponent } from './tarea-print/tarea-print.component';
import { SharedPipesModule } from '../shared/pipes/shared-pipes.module';
import { EventEmitter } from 'protractor';

describe('TareaComponent', () => {
  let component: TareaComponent;
  let fixture: ComponentFixture<TareaComponent>;
  
  let http: HttpClient;
  let service: TareaService;

  let tareas: TareaId[] = [
    { id: "1", codigo: "TAR1", descripcion: "Creación componente tarea-list", aplicacion: "WorkFlowG", tipo: "Feature", estado: "Desarrollo", fechaAlta: "2018/05/10", usuario: "Rul", despliegue: "1.0" },
    { id: "2", codigo: "TAR2", descripcion: "Creación componente tarea-item", aplicacion: "WorkFlowG", tipo: "Feature", estado: "Desarrollo", fechaAlta: "2018/05/10", usuario: "Rul", despliegue: "1.0" }
  ];

  let tarea: TareaId = { id: "1", codigo: "TAR1", descripcion: "Creación componente tarea-list", aplicacion: "WorkFlowG", tipo: "Feature", estado: "Desarrollo", fechaAlta: "2018/05/10", usuario: "Rul", despliegue: "1.0" };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxDatatableModule, FormsModule, RouterTestingModule, ReactiveFormsModule, SharedPipesModule],
      declarations: [ TareaComponent, TareaListComponent, TareaItemComponent, TareaPrintComponent ],
      providers:[ HttpClient, HttpClientModule, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaComponent);
    component = fixture.componentInstance;
    // service = new TareaService(http);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return tarea', () => {
    fixture.detectChanges();
    component.onSelectTarea(tarea);
    expect(component.tarea).toBe(tarea);
  });

  afterAll(() =>{
    fixture.detectChanges();
      fixture = null;
      http = null;
      service = null;
      component = null;
  });



});
