import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaComponent } from './persona.component';
import { PersonaPrintComponent } from './persona-print/persona-print.component';

const routes: Routes = [
  {path: '', component: PersonaComponent},
  {path: 'print/:id', component: PersonaPrintComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
