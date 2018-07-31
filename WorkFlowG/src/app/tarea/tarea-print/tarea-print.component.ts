import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tarea } from '../shared/tarea';
import { TareaService } from '../shared/tarea.service';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Componente de Printado de Tarea. Muestra el nombre de la Tarea a
 * printar en otra ruta
 */
@Component({
  selector: 'wfg-tarea-print',
  templateUrl: './tarea-print.component.html',
  styleUrls: ['./tarea-print.component.css']
})
export class TareaPrintComponent implements OnInit, OnDestroy {
  tarea: Tarea;
  id: string;
  params: any;
  /**
   * Constructor de TareaPrint. Activa la ruta donde se ejecutará el componente
   * @param tareaService parámetro referente al Servicio de Tarea
   * @param activatedRoute parámetro referente a la ruta activa donde se ejecutará el componente
   */
  constructor(private tareaService: TareaService, public activatedRoute: ActivatedRoute, public router: Router) { }
  /**
   * Hook de Inicio de TareaPrint. Establece la ruta activa de navegación y hace una petición del
   * nombre de la Tarea a partir de su Id
   */
  ngOnInit() {
    // this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    this.tareaService.getTareaHttp(this.id).subscribe((tarea: Tarea) => {
      this.tarea = tarea;
    });
  }
  /*
  * Hook de Destrucción de TareaPrint
  */
  ngOnDestroy(){
    this.params.unsubscribe();
  }

  onReturn() {
    this.router.navigate(['']);
  }
}
