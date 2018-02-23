import { Component } from '@angular/core';

import { DataserviceService } from './DataserviceService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample dashboard application!';
  public items = [{ id: 1, name: 'john', val1: 12.1223, val2: 23.03, val3: 999.77 }];

  public AllStatusData = [];

  constructor(private data: DataserviceService) {
    
  }

  refreshData() {
    this.data.getStatusData()
      .subscribe(data => {
        this.AllStatusData = data;
      })
  }
}

