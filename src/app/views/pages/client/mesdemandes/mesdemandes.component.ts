import { Component, OnInit } from '@angular/core';
import { DataTable } from "simple-datatables";
@Component({
  selector: 'app-mesdemandes',
  templateUrl: './mesdemandes.component.html',
  styleUrls: ['./mesdemandes.component.scss']
})
export class MesdemandesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

}
