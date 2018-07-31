import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Persona } from '../shared/persona';
import { PersonaService } from '../shared/persona.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

/**
 * Componente PersonaList muestra la lista de Personas almacenadas en Local Storage
 */
@Component({
  selector: 'wfg-persona-list',
  templateUrl: './persona-list.component.html',
  styles: []
})

export class PersonaListComponent implements OnInit {

  /**
   * Input del Array de Personas referente a la Lista de Personas a mostrar
   */
  @Input() personas: Persona[];
  /**
   * Output del EventEmitter con la Persona que ha sido seleccionada de la Lista
   */
  @Output() notifyPersona: EventEmitter<Persona> = new EventEmitter<Persona>();
  obTareaService: any;
  modal: boolean;
  personaToDelete: Persona;
  closeResult: string;
  modalPersona: string;

  /**
   * Constructor de Persona List 
   * @param personaService parámetro que hace referencia al servicio de Persona
   * @param modalService parámetro utilizado para la implementación de la ventana modal
   */
  constructor(private personaService: PersonaService, private modalService: NgbModal, private router: Router) { }

  /**
   * Hook de inicio de PersonaList hace un GET con la lista de personas en Local Storage
   * y inicializa la ventana modal
   */
  ngOnInit() {
    this.obTareaService = this.personaService.getPersonasHttp().subscribe((personas: Persona[]) => {
      this.personas = personas;
    });
    this.modal = false;
  }

  /**
   * Método de apertura de la ventana modal
   * @param content template referente a la ventana modal
   * @param persona persona seleccionada de la lista
   */
  open(content: any, persona: Persona) {
    
    this.modalPersona = persona.nombre;
    this.modalService.open(content).result.then((result) => {
      console.log(persona);
      this.closeResult = `Closed with: ${result}`
      this.onDelete(persona)
      ;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  /**
   * Método que informa sobre la razón por la cual se ha cerrado la ventana modal
   * @param reason razón por la cual se ha cerrado la ventana modal
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  /**
   * Listener que hace referencia a la Persona seleccionada de la Lista
   * @param persona Persona seleccionada de la lista
   */
  onSelect(persona: Persona) {
    console.log(persona);
    this.notifyPersona.emit(persona);
  }  

  /**
   * Listener del Botón de Borrado de la Persona seleccionada de la lista
   * Hace la llamada al Interceptor para borrar la persona del LocalStorage
   * Hace la llamada al Interceptor para recibir la lista de personas actualizada
   * @param persona Persona selecionada de la lista
   */
  onDelete(persona: Persona) {
    this.personaService.deletePersonaHttp(persona.id).subscribe(() => {
      // this.notify.emit(tareaSave);
    });
    this.obTareaService = this.personaService.getPersonasHttp().subscribe((personas: Persona[]) => {
      this.personas = personas;
    });
  }

  print(persona: Persona) {
    console.log(persona.id);
    this.router.navigate([`personas/print/${persona.id}`]);
  }

}
