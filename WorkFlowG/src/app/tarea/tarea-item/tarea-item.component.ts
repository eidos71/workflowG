import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Tarea } from '../shared/tarea';
import { TareaService } from '../shared/tarea.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TareaId } from '../shared/tarea-id';
import { ValidateDropdown } from '../../shared/validators/dropdownValidator';
import { EmailValidator } from '../../shared/validators/EmailValidator';
import { validateMail } from '../../shared/validators/mail.validator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * Componente TareaItem hace referencia la Tarea seleccionada de la lista
 */
@Component({
  selector: 'wfg-tarea-item',
  templateUrl: './tarea-item.component.html',
  styles: []
})

export class TareaItemComponent implements OnInit {

  /**
   * Input TareaId hace referencia la tarea seleccionada de la lista
   */
  @Input() tarea: TareaId;

  /**
   * Outpur del tipo EventEmitter Tarea que devuelve la tarea que ha sido guardada en LocalStorage
   */
  @Output() notify: EventEmitter<TareaId[]> = new EventEmitter<TareaId[]>();
  tareaForm: FormGroup;
  estados = [
    {label: "DES", value: "Desarrollo"},
    {label: "PRO", value: "Produccion"}
  ];
  obTareaService: any;
  isRandom: boolean;

  /**
   * Constructor de TareaService. Inicializa el Formulario Reactivo
   * @param tareaService servicio de Tarea para las peticiones REST
   */
  constructor(private tareaService: TareaService, public router: Router) {
    console.log('Constructor de tarea-item');
    this.tareaForm = new FormGroup({
    codigo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    aplicacion: new FormControl(''),
    tipo: new FormControl(''),
    estadoTarea: new FormControl(''),
    fechaAlta: new FormControl(''),
    usuario: new FormControl(''),
    despliegue: new FormControl('')
    });
   }

  /**
   * Hook de Inicialización de TareaItem
   */
  ngOnInit() {
    console.log('Init de tarea-item');
    // this.isRandom = true;
    console.log(this.tareaForm.controls.codigo);
  }

  /**
   * Hook de control de cambios de TareaItem. Detecta si ha habido algún cambio y en caso de que
   * se guarde una Tarea porque ha sido seleccionada añade sus atributos a los campos del formulario
   */
  ngOnChanges() {
    console.log('Change de tarea-item');
    console.log("Tarea del Item:"+this.tarea.id);

    if(this.tarea && this.tarea.id){
      let controls = this.tareaForm.controls;
      controls['codigo'].setValue(this.tarea.codigo);
      console.log('Atributo'+this.tarea.codigo);
      console.log('Campo'+controls['codigo'].value);
      controls['descripcion'].setValue(this.tarea.descripcion);
      controls['aplicacion'].setValue(this.tarea.aplicacion);
      controls['tipo'].setValue(this.tarea.tipo);
      controls['estadoTarea'].setValue(this.tarea.estado);
      controls['fechaAlta'].setValue(this.tarea.fechaAlta);
      controls['usuario'].setValue(this.tarea.usuario);
      controls['despliegue'].setValue(this.tarea.despliegue);
    }
  }

  /**
   * Método de Nueva Tarea. Inicializa todos los campos del formulario y pone el Id de Tarea a null
   */
  onNew() {

    this.tarea= null;
    let controls = this.tareaForm.controls;
      controls['codigo'].setValue(null);
      controls['descripcion'].setValue(null);
      controls['aplicacion'].setValue(null);
      controls['tipo'].setValue(null);
      controls['estadoTarea'].setValue("");
      controls['fechaAlta'].setValue(null);
      controls['usuario'].setValue(null);
      controls['despliegue'].setValue(null);
    }

  /**
   * Método de éxito de guardado. Inserta o Actualiza la Tarea en la lista de tareas en función de 
   * si ésta tiene Id o no
   */  
  onSuccess() {

    let controls = this.tareaForm.controls;
    const tareaSave: Tarea = {      
      codigo: controls['codigo'].value,
      descripcion: controls['descripcion'].value,
      aplicacion: controls['aplicacion'].value,
      tipo: controls['tipo'].value,
      estado: controls['estadoTarea'].value,
      fechaAlta: controls['fechaAlta'].value,
      usuario: controls['usuario'].value,
      despliegue: controls['despliegue'].value
    };
    
    if (this.tarea && this.tarea.id) {
      console.log('caso1');
      this.tareaService.updateTareaHttp(this.tarea.id, tareaSave).subscribe((tareas: TareaId[]) => {
        // console.log("Tarea-item -> vuleta del interceptor" + tareas[(tareas.length)-1].codigo);
        this.onNew();
        this.notify.emit(tareas);
      });
    } else {
      console.log('caso2');
      this.tareaService.insertarTareaHttp(tareaSave).subscribe((tareas: TareaId[]) => {
        this.onNew();
        this.notify.emit(tareas);
      });
    }

  }
  onReturn() {
    this.router.navigate([`/personas`]);
  }

  

}
