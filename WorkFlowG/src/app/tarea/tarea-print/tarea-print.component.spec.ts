import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaPrintComponent } from './tarea-print.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { of } from 'rxjs';
import { TareaId } from '../shared/tarea-id';
import { TareaService } from '../shared/tarea.service';

describe('TareaPrintComponent', () => {
  let component: TareaPrintComponent;
  let fixture: ComponentFixture<TareaPrintComponent>;
  let router: Router;
  let mockTarea: TareaId = {id: "1", codigo: "TAR1", descripcion: "Creación componente tarea-list", aplicacion: "WorkFlowG", tipo: "Feature", estado: "Desarrollo", fechaAlta: "2018/05/10", usuario: "Rul", despliegue: "1.0" };
  let service: TareaService;
  let http: HttpClient;
  let aRoute: ActivatedRoute;
  let mockId: string;
  let mockParams: Params;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ TareaPrintComponent ],
      providers:[ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    http = null;    
    aRoute = new ActivatedRoute();
    // mockParams = aRoute.params;
    service = new TareaService(http);
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(TareaPrintComponent);
    // component = fixture.componentInstance;
    component = new TareaPrintComponent(service, aRoute, router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save Tarea when ngOninit()', () => {
    
    // component.activatedRoute.params = of(mockParams);
    
    spyOn(service, 'getTareaHttp').and.returnValue(of(mockTarea));
    component.ngOnInit();
    // expect(component.id).toBe(mockId);
    expect(component.tarea).toBe(mockTarea);

  });

  it('should go back', () => {
    spyOn(component.router, 'navigate').and.callThrough();
    component.onReturn();
    expect(router.navigate).toHaveBeenCalledWith([``]);
  });

  afterEach(() => {
    service = null;
    component = null;
    fixture = null;
    router = null;
  });
});
