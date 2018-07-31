import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TareaService } from '../shared/tarea.service';
import { TareaId } from '../shared/tarea-id';
import { Router } from '@angular/router';

/**
 * Componente TareaList. Lista las tareas en una ngx-dataTable
 */
@Component({
  selector: 'wfg-tarea-list',
  templateUrl: './tarea-list.component.html',
  styles: ['./tarea-list.component.css']
})

export class TareaListComponent implements OnInit {  

  temp: Array<TareaId>;
  rows: Array<TareaId>;

  /**
   * Input Array de TareaId que hace referencia al listado de tareas a mostrar
   */
  @Input() tareas: TareaId[];

  /**
   * Output notifyTarea de tipo EventEmitter de TareaId que hace referencia a la Tarea que 
   * se ha seleccionado de la lista de tareas
   */
  @Output() notifyTarea: EventEmitter<TareaId> = new EventEmitter<TareaId>();
  obTareaService: any;

  /**
   * Contructor de TareaList
   * @param tareaService parámetro referente al Servicio de Tarea
   * @param router parámetro referente a la navegación de rutas desde Tarea
   */
  constructor(private tareaService: TareaService, public router: Router) { }

  /**
   * Hook de Inicio del componente TareaList
   * Hace un GET de la lista de tareas al LocalStorage y las guarda
   * Inicializa el template y las rows para el uso del dataTable
   */
  ngOnInit() {
    this.obTareaService = this.tareaService.getTareasHttp().subscribe((tareas: TareaId[]) => {
      this.tareas = tareas;
      this.temp = tareas;
      this.rows = this.temp;
    });
  }

  ngOnChanges() {
    this.obTareaService = this.tareaService.getTareasHttp().subscribe((tareas: TareaId[]) => {
      this.tareas = tareas;
      this.temp = tareas;
      this.rows = this.temp;
      
    });
  }

  /**
   * Listener de selección de la lista de tareas
   * Se asegura que el evento sea de tipo click y que se haya seleccionado una columna de datos
   * @param event evento de la Tarea seleccionada de la lista de tareas
   */
  onSelect(event: any) {
    // console.log(event.row);
    if(event.type === 'click' && !(event.column.name === "")) {
      this.notifyTarea.emit(event.row);
      console.log('Event row: '+ event.row.id);
    }    
  }

  /**
   * Listener de borrado del Botón de la lista de Tareas
   * Borra la tarea del LocalStorage a partir de su Id
   * Hace un GET del LocalStorage para recibir la lista de tareas actualizada
   * @param tarea TareaId a borrar de la lista de tareas
   */
  onDelete(tarea: TareaId) {
    this.tareaService.deleteTareaHttp(tarea.id).subscribe((tareas: TareaId[]) => {
      this.tareas = tareas;
      this.rows = tareas;
      // this.temp = tareas;
      // this.rows = this.temp;
    });
    // this.obTareaService = this.tareaService.getTareasHttp().subscribe((tareas: TareaId[]) => {
    //   this.tareas = tareas;
    // });
  }
  
  /**
   * Método Print de TareaList hace una navegación a otra ruta para mostrar el nombre de la tarea
   * seleccionada
   * @param tarea tarea a mostrar en otra ruta
   */
  print(tarea: TareaId){
    console.log(tarea.id);
    this.router.navigate([`/tarea/print/${tarea.id}`]);
  }

  /**
   * Modificación de estilos del template (Prueba)
   */
  setStyles(){
    let styles= {
        color: 'red',
    };
    return styles;
  }

  getRowHeight(row) {
    if(!row) return 50;
    if(row.height === undefined) return 50;
    return row.height;
  }
}
