import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { StudentdetailsComponent } from './components/studentdetails/studentdetails.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'student/:id',
    component: StudentdetailsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
