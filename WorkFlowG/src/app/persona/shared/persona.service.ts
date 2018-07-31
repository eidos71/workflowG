import { Injectable } from '@angular/core';
import { PersonaListComponent } from '../persona-list/persona-list.component';
import { Persona } from '../shared/persona';
// import {personas} from '../persona-list/persona-list.component'
import { HttpClient } from '@angular/common/http';

/**
 * Servicio de peticiones REST al Interceptor
 */
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  /**
   * Constructor del Servicio
   * @param http paramétro para las peticiones HTTP que serán interceptadas por nuestro Interceptor
   */
  constructor(private http: HttpClient) { }

  /**
   * Método GET
   * @returns Devuelve la Lista de Personas del Local Storage
   */
  getPersonasHttp() {
    return this.http.get<Persona[]>('/api/personas');
  }
  getPersonaHttp(id: string) {
    return this.http.get(`/api/personas/${id}`);
  }

  /**
   * Método PUT. Actualiza la Persona a partir de su Id
   * @param id Identificador de la Persona
   * @param persona Persona a actualizar
   * @returns No devuelve nada. Debería devolver la lista actualizada (futura implementación)
   */
  updatePersonaHttp(id: string, persona: Persona) {
    console.log('Caso Update - Entry');
    return this.http.put(`/api/personas/${id}`, persona);
  }

  /**
   * Método POST. Inserta la Persona en LocalStorage
   * @param persona Persona a insertar
   * @returns No devuelve nada. Debería devolver la lista actualizada (futura implementación)
   */
  insertarPersonaHttp(persona: Persona) {
    console.log('Caso Insert - Entry');
    return this.http.post('/api/personas', persona);
  }

  /**
   * Método DELETE: Elimina a una Persona a partir de su Id
   * @param id Id de la persona a elminar
   * @returns No devuelve nada. Debería devolver la lista actualizada (futura implementación)
   */
  deletePersonaHttp(id: string) {
    console.log('Caso Remove - Entry');
    return this.http.delete(`/api/personas/${id}`);
  }

}
