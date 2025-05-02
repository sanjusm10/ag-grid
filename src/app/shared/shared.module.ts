import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerAgGridComponent } from './server-ag-grid/server-ag-grid.component';
import { ClientAgGridComponent } from './client-ag-grid/client-ag-grid.component';
import { ClientGridComponent } from './client-grid/client-grid.component';
import { ServerGridComponent } from './server-grid/server-grid.component';
import { AgGridAngular } from 'ag-grid-angular';


@NgModule({
  declarations: [
    ServerAgGridComponent,
    ClientAgGridComponent,
    ClientGridComponent,
    ServerGridComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular
  ],
  exports: [
    ServerAgGridComponent,
    ClientAgGridComponent,
    ClientGridComponent,
    ServerGridComponent
  ]
})
export class SharedModule { }
