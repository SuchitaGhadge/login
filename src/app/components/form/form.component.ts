import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { FormDataService } from '../../services/form-data.service';
import { ButtonModule } from 'primeng/button';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, ButtonModule]
})
export class FormComponent implements OnInit {
  studentForm : FormGroup
  constructor(private fb : FormBuilder, private _dataService : FormDataService, private router : Router) {
    this.studentForm = fb.group({
      name: ['', Validators.required],
      marks : ['', Validators.required],
      dateOfExam : ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  onFormSubmit(){
    console.log(this.studentForm.value);
    if(this.studentForm.valid){
      this._dataService.postData(this.studentForm.value).subscribe(
        (res:any) => {
          console.log(res);
          let id = res[0].id
          this.router.navigateByUrl(`/student/${id }`)
        }
      )
    }
  }

}
