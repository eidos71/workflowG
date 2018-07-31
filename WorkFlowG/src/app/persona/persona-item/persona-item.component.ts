import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../shared/persona';
import { PersonaService } from '../shared/persona.service';
import { FormGroup, FormControl, Validators, EmailValidator, FormBuilder } from '@angular/forms';
import { validateMail } from '../../shared/validators/mail.validator';
import { Router } from '@angular/router';

/**
 * Componente Persona Item referente a la Persona seleccionada de la lista
 */
@Component({
  selector: 'wfg-persona-item',
  templateUrl: './persona-item.component.html',
  styles: []
})
/**
     * Maneja la selección de Persona de la lista y la gestiona con Local Storage
     * posteriormente envía la información a la lista
     * @param persona Input persona que le llega
     * @param notify Output EventEmitter de la Persona al componente padre
     */
export class PersonaItemComponent implements OnInit {
  
  /**
   * Input Persona que hace referencia a la Persona seleccionada en la lista
   */
  @Input() persona: Persona;
  /**
   * Output notify que hace referencia al EventEmitter de Persona con la persona 
   * que se ha añadido a Local Storage
   */
  @Output() notify: EventEmitter<Persona> = new EventEmitter<Persona>();

  personaForm: FormGroup;

  sexos = [
    {label: "Hombre", value: "Hombre"},
    {label: "Mujer", value: "Mujer"}
  ];

  /**
  * Constructor de Persona Item
  * @param personaService parámetro que hace referencia al servicio de Persona
  * @param fb parámetro que hace referencia al FormBuilder para el formulario reactivo
  */
  constructor(private personaService: PersonaService, private fb: FormBuilder, private router: Router) {
    console.log('Constructor de tarea-item');
    this.personaForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl(''),
      fechaNacimiento: new FormControl(''),
      email: new FormControl('',  validateMail ),
      sexoPersona: new FormControl(''),
    });
   }

  /**
  * Hook de Inicio de Persona Item
  */
  ngOnInit() {

    console.log('Init de persona-item');
  }

  /**
  * Hook de Detección de cambios de Persona Item
  */
  ngOnChanges() {
    console.log('Change de persona-item');
    console.log(this.persona);
    if(this.persona && this.persona.id){
      let controls = this.personaForm.controls;
      controls['nombre'].setValue(this.persona.nombre);
      controls['apellido'].setValue(this.persona.apellido);
      controls['fechaNacimiento'].setValue(this.persona.fechaNacimiento);
      controls['email'].setValue(this.persona.email);
      controls['sexoPersona'].setValue(this.persona.sexo);
    }
  }

  /**
  * Listener de control de Guardado de Persona en Local Storage
  */
  onSuccess() { 

    // Si el campo requerido es inválido 
    if(!this.personaForm.controls.email.valid) {
      this.markFormGroupTouched(this.personaForm);
    }
    else {
      let controls = this.personaForm.controls;
      // Si existe la Persona y tiene id se guarda en personaSave el valor de los campos
      if(this.persona && this.persona.id) {
          const personaSave: Persona ={
          id: this.persona.id,      
          nombre: controls['nombre'].value,
          apellido: controls['apellido'].value,
          fechaNacimiento: controls['fechaNacimiento'].value,
          email: controls['email'].value,
          sexo: controls['sexoPersona'].value
        };

        // Se llama al Servicio para actualizar a la Persona
        this.personaService.updatePersonaHttp(this.persona.id, personaSave).subscribe((persona: Persona) =>
        { this.notify.emit(personaSave);
        });
      // Si no existe la Persona o no tiene id se establece personaSave con el campo id a null
      }else {
        const personaSave: Persona ={
          id: null,      
          nombre: controls['nombre'].value,
          apellido: controls['apellido'].value,
          fechaNacimiento: controls['fechaNacimiento'].value,
          email: controls['email'].value,
          sexo: controls['sexoPersona'].value
        };

        // Se llama al Servicio para insertar la nueva Persona
        this.personaService.insertarPersonaHttp(personaSave).subscribe((persona: Persona) =>
        { this.notify.emit(personaSave);
        });
      }
    }
  }
  // Se marcan todos los campos del formulario a touched
  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }

  onReturn() {
    this.router.navigate([``]);
  }

}
