import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormDataService } from 'src/app/services/form-data.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-studentdetails',
    templateUrl: './studentdetails.component.html',
    styleUrls: ['./studentdetails.component.css'],
    standalone: true,
    imports: [DatePipe]
})
export class StudentdetailsComponent implements OnInit {
  studentID: any
  studentDetails: any
  constructor(private route : ActivatedRoute, private _dataService : FormDataService) { 
    this.route.params.subscribe(
      res => {
       
        this.studentID = res['id']
      }
    )

    this.getData(this.studentID)
  }
  

  ngOnInit(): void {
  }

  getData(id:any){
    this._dataService.getDataWithId(id)?.subscribe(
      (res:any )=> {
        console.log(res, "res with data");
        this.studentDetails = {
          studentName : res[0].name,
          studentMarks : res[0].marks,
          date : res[0].dateOfExam,
          studentId :res[0].id 
        }
      }
    )
  }

}
