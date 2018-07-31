import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { TareaId } from './tarea-id';
import { Observable } from 'rxjs';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'//Cuando arranque el proyecto ya estará disponible el inyectable
})
export class TareaService {

  constructor(private http: HttpClient) { }

  //Get tareas
  getTareasHttp() {
    return this.http.get<Tarea[]>('/api/tareas');
  }
  //Get tarea by Id
  getTareaHttp(id: string) {
    return this.http.get(`/api/tareas/${id}`);
  }
  
  insertarTareaHttp(tarea: Tarea) {
    console.log('Caso 2 - Entry');
    return this.http.post('/api/tareas', tarea); 
  }

  updateTareaHttp(id: string, tarea: Tarea) {
    console.log('Caso 1 - Entry');
    return this.http.put(`/api/tareas/${id}`, tarea);
  }

  deleteTareaHttp(id: string) {
    console.log('Caso Remove - Entry');
    return this.http.delete(`/api/tareas/${id}`);
  }

}
