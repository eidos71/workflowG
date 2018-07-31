import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoTareaPipe } from './estado-tarea.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EstadoTareaPipe],
  exports: [EstadoTareaPipe]
})
export class SharedPipesModule { }
