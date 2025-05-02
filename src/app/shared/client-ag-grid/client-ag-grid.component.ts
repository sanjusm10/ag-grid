import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColDef,GridReadyEvent } from 'ag-grid-community';



interface IRow {
  mission: string;
  company: string;
  location: string;
  date: string;
  time: string;
  rocket: string;
  price: number;
  successful: boolean;
}

@Component({
  selector: 'app-client-ag-grid',
  templateUrl: './client-ag-grid.component.html',
  styleUrl: './client-ag-grid.component.scss'
})
export class ClientAgGridComponent {

  rowData: IRow[] = [];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    { field: "mission" },
    { field: "company" },
    { field: "location" },
    { field: "date" },
    { field: "price" },
    { field: "successful" },
    { field: "rocket" },
  ];

  // Load data into grid when ready
  constructor(private http: HttpClient) {}
  onGridReady(params: GridReadyEvent) {
    this.http
      .get<any[]>("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .subscribe((data) => (this.rowData = data));      
  }
}
