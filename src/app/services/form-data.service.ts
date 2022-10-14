import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  dataWithID: any[] = []
  constructor() { }

  postData(data: any) {
    const randomNumber = Math.floor((Math.random() * 10) + 1)
    this.dataWithID = [{ ...data, id: randomNumber }]
    return new Observable(observer => {
      observer.next(this.dataWithID)
      observer.complete()
    })
  }

  getDataWithId(id: any) {
    console.log(id)
    console.log(this.dataWithID);

    if(!this.dataWithID.length){
      console.error("blank arr")
      return
    }
    const returnData = this.dataWithID.filter(data => data.id == id)

    return new Observable(subscriber => {
      subscriber.next(returnData)
      subscriber.complete()
    })
  }
}
