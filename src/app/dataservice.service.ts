import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Rx';

@Injectable()
export class DataserviceService {
  public AllStatusData=[];

  constructor() { }

  public getStatusData():Observable<any[]>{
    this.AllStatusData = [
      { id: 1, status: 'Pending', records: Math.random() },
      { id: 1, status: 'In progress', records: 120 },
      { id: 1, status: 'Completed', records: 100 },
      { id: 1, status: 'Hold', records: 120 },
      { id: 1, status: 'Cancelled', records: 12 },
      { id: 1, status: 'Started', records: 1120 },
    ];
    return Observable.of(this.AllStatusData);
  } 
}
