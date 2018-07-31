import { Component, OnInit } from '@angular/core';
import { Persona } from './shared/persona';
import { PersonaService } from './shared/persona.service';


/**
 * Componente padre Persona que maneja el paso de parámetros entre PersonaList y PersonaItem
 */
@Component({
  selector: 'wfg-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: Persona;
  obTareaService: any;
  personas: Persona[];

  /**
  * Constructor de Persona
  * @param personaService parámetro que hace referencia al servicio de Persona
  */
  constructor(private personaService: PersonaService) { }

  /**
   * Hook de Inicio del componente Persona
   */
  ngOnInit() {
  }

  /**
   * Método que recoge la persona que ha sido seleccionada de PersonaList 
   * @param persona Persona seleccionada de la lista
   */
  onSelectPersona(persona: Persona) {
    this.persona = persona;
  }

  /**
   * Método que recoge el EventEmitter de la Persona que ha sido guardada en Local Storage
   * Añade Alerts de confirmación de registro
   * Llama al servicio para hacer un GET de la Lista de Personas actualizada
   * @param persona Persona que ha sido guardada en Local Storage
   */
  mostrarSuccess(persona: Persona){
    alert(`Persona ${persona.nombre} registrada`);
    this.obTareaService = this.personaService.getPersonasHttp().subscribe((personas: Persona[]) => {
      this.personas = personas;
    });
  }
  

}
