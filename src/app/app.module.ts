import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { FormDataService } from './services/form-data.service';
import { StudentdetailsComponent } from './components/studentdetails/studentdetails.component';
import { FormComponent } from './components/form/form.component';
// primeng modules
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    StudentdetailsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    CalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ButtonModule
  ],
  providers: [FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
