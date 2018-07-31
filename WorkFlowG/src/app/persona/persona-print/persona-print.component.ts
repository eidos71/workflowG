import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../shared/persona.service';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../shared/persona';

@Component({
  selector: 'wfg-persona-print',
  templateUrl: './persona-print.component.html',
  styleUrls: ['./persona-print.component.css']
})
export class PersonaPrintComponent implements OnInit {

  params: any;
  persona: Persona;
  id: string;


  constructor(private personaService: PersonaService, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {

    this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    this.personaService.getPersonaHttp(this.id).subscribe((persona: Persona) => {
      console.log(persona);
      console.log('El id es' + persona.id);
      this.persona = persona;
    })
    // console.log(this.persona.id);
  }

  ngOndestroy() {
    this.params.unsubscribe();
  }

}
