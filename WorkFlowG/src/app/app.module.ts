import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './shared_aux/footer.component';

import { FakeBackendProvider } from './shared/interceptors/fakeBackendInterceptor';
import { JwtInterceptor } from './shared/interceptors/jwtIterceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TareaService } from './tarea/shared/tarea.service';
import { DateValidatorDirective } from './shared/date-validator.directive';
import { ForbiddenNameDirective } from './shared/forbidden-name.directive';
// import { DateValidationDirective } from './shared/validators/date-validation.directive';
import { NgDirective } from './ng.directive';
import { EmailValidator } from "./shared/validators/EmailValidator";
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
MatSortModule, MatTableModule } from "@angular/material";
import { MyErrorDirectiveDirective } from './shared/directives/my-error-directive.directive';

// import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// import { DataTableModule } from 'angular-4-data-table';
// import { DateValidator } from './shared/validators/fecha-custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DateValidatorDirective,
    ForbiddenNameDirective,
    NgDirective,
    EmailValidator
    
       
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,   
    FormsModule, 
    MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
    
    NgbModule.forRoot()
  ],
  providers: [        
    TareaService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
      },

    // provider used to create fake backend
    FakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
