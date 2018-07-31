import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareaComponent } from './tarea.component';
import { TareaPrintComponent } from './tarea-print/tarea-print.component';

const routes: Routes = [
  { path: '', component: TareaComponent},
  { path: 'tarea/print/:id', component: TareaPrintComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareaRoutingModule { }
