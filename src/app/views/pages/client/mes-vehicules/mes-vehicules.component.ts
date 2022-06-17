import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataTable } from "simple-datatables";
@Component({
  selector: 'app-mes-vehicules',
  templateUrl: './mes-vehicules.component.html',
  styleUrls: ['./mes-vehicules.component.scss']
})
export class MesVehiculesComponent implements OnInit {
  modalService: any;

  constructor() { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
  openScrollableModal(content: TemplateRef<any>) {
    this.modalService.open(content, {scrollable: true}).result.then((result: string) => {
      console.log("Modal closed" + result);
    }).catch(() => {});
  }

}
