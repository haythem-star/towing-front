import { Component, OnInit } from '@angular/core';
import { DataTable } from "simple-datatables";
@Component({
  selector: 'app-mes-vehicules',
  templateUrl: './mes-vehicules.component.html',
  styleUrls: ['./mes-vehicules.component.scss']
})
export class MesVehiculesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

}
