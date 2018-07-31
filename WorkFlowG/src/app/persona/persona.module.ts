import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { PersonaComponent } from './persona.component';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaItemComponent } from './persona-item/persona-item.component';
import { PersonaService } from './shared/persona.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonaPrintComponent } from './persona-print/persona-print.component';

@NgModule({
  imports: [
    CommonModule,
    PersonaRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PersonaService],
  declarations: [PersonaComponent, PersonaListComponent, PersonaItemComponent, PersonaPrintComponent]
})
export class PersonaModule { }
