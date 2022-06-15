import { Component, OnInit } from '@angular/core';
import { DataTable } from "simple-datatables";
@Component({
  selector: 'app-mesclient',
  templateUrl: './mesclient.component.html',
  styleUrls: ['./mesclient.component.scss']
})
export class MesclientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

}
