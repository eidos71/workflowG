import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareaRoutingModule } from './tarea-routing.module';
import { TareaComponent } from './tarea.component';
import { TareaListComponent } from './tarea-list/tarea-list.component';
import { TareaItemComponent } from './tarea-item/tarea-item.component';
import { TareaService } from './shared/tarea.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedPipesModule } from '../shared/pipes/shared-pipes.module';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TareaPrintComponent } from './tarea-print/tarea-print.component';
import { Tarea } from './shared/tarea';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MyErrorDirectiveDirective } from '../shared/directives/my-error-directive.directive';



@NgModule({
  imports: [
    CommonModule,
    TareaRoutingModule,
    SharedPipesModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    

  ],
  
  providers: [TareaService],
  declarations: [TareaComponent, TareaListComponent, TareaItemComponent,MyErrorDirectiveDirective, TareaPrintComponent]
})
export class TareaModule { }
