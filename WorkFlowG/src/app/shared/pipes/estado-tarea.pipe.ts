import { Pipe, PipeTransform } from '@angular/core';


/**
 * Pipe de EstadoTarea para convertir el valor del estado
 * de Desarrollo / Producción a DES/PRO
 */
@Pipe({
  name: 'estadoTarea'
})
export class EstadoTareaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == "Desarrollo") {
      return "DES";
    }else {
      return "PRO";
    }
  }

}
