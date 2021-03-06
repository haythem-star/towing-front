
import { DataTable } from "simple-datatables";

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserserviceService } from 'src/app/services/userservice.service';
import { TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mes-vehicules',
  templateUrl: './mes-vehicules.component.html',
  styleUrls: ['./mes-vehicules.component.scss']
})
export class MesVehiculesComponent implements OnInit {
  constructor(public userservice: UserserviceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
  openScrollableModal(content: TemplateRef<any>) {
    this.modalService.open(content, {scrollable: true}).result.then((result) => {
      console.log("Modal closed" + result);
    }).catch((res) => {});
  }
}
