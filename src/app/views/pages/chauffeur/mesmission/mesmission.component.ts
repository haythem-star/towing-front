import { Component, OnInit } from '@angular/core';
import { DataTable } from "simple-datatables";
@Component({
  selector: 'app-mesmission',
  templateUrl: './mesmission.component.html',
  styleUrls: ['./mesmission.component.scss']
})
export class MesmissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

}
