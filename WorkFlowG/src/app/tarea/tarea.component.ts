import { Component, OnInit } from '@angular/core';
import { Tarea } from './shared/tarea';
import { TareaId } from './shared/tarea-id';
import { TareaService } from './shared/tarea.service';

/*
* Componente del padre Tarea. Maneja la información entre TareaList y TareaItem
*/
@Component({
  selector: 'wfg-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  tarea: TareaId;
  tareas: TareaId[];
  obTareaService: any;

  /**
   * Constructor de Tarea 
   * @param tareaService parametro que hace referencia la Servicio de Tarea
   */
  constructor(private tareaService: TareaService) { }

  /*
  * Hook de Inicio de Tarea
  */
  ngOnInit() {
    console.log('Entro en Tarea');
  }

  /**
   * Método de selección de la Tarea. Recoge la Tarea de la lista de tareas y la guarda en variable
   * @param tarea parámetro que hace referencia a la Tarea de la lista de tareas
   */
  onSelectTarea(tarea: TareaId) {
    // console.log("Tarea Padre"+tarea);
    this.tarea = tarea;    
    console.log('Padre: '+ this.tarea.id);
  }

  /**
   * Método de Éxito de Tarea. Recoge la Tarea que ha sido guardada en LocalStorage.
   * Muestra alerts de éxito de registro.
   * Hace un GET de la lista de Tareas para que se actualice
   * @param tarea tarea que ha sido guardada en LocalStorage
   */
  mostrarSuccess(tareas: TareaId[]) {

    // alert('Tarea '+ tarea.codigo + ' registrada');
    this.tarea = null;
    this.tareas = tareas;
    console.log('Tareas del Tarea:'+ tareas);
    console.log(this.tareas);
    console.log("Mostrar Success, Tarea Padre",+ tareas[0]);
    // this.obTareaService = this.tareaService.getTareasHttp().subscribe((tareas: TareaId[]) => {
    //   this.tareas = tareas;
    // });   
    
  }

}
