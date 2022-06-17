import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserserviceService } from 'src/app/services/userservice.service';
import { FormsModule } from '@angular/forms';
import { CamionserviceService } from 'src/app/services/camionservice.service';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { VehiculeserviceService } from 'src/app/services/vehiculeservice.service';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  @Input() titre = '';
  @Input() item1 = '';
  @Input() item2 = '';
  @Input() item3 = '';
  @Input() typeItem : number;
  id: any;
  data: any;
  email: any;
  name: any;
  username: any;
  user = new User();
  //user:any;
  constructor(
    private route: ActivatedRoute,
    private userservice: UserserviceService,
    private camionservice: CamionserviceService,
    private chauffeurservice : ChauffeurService,
    private voitureservice : VehiculeserviceService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(this.typeItem = 1) {
      this.getUserData();
    }else if (this.typeItem = 2){
      this.getCamionData()
    }else if (this.typeItem = 3){
      this.getChauffeurData()
    }else if (this.typeItem = 4){
      this.getVoitureData()
    }
    
    // this.updateEmployee();
  }

  getChauffeurData(){
    this.chauffeurservice.get(this.id).subscribe((res) => {
      //console.log(res);
      this.data = res;
      // this.user = this.data;
      this.email = this.data.mail;
      this.name = this.data.nom;
      this.username = this.data.numeroTel;
      // console.log(this.user);
      console.log(this.email);
      console.log(this.name);
      console.log(this.username);
    });

  }
  getCamionData(){
    this.camionservice.get(this.id).subscribe((res) => {
      //console.log(res);
      this.data = res;
      // this.user = this.data;
      this.email = this.data.matricule;
      this.name = this.data.modele;
      this.username = this.data.couleur;
      // console.log(this.user);
      console.log(this.email);
      console.log(this.name);
      console.log(this.username);
    });

  }
  getVoitureData(){
    this.voitureservice.get(this.id).subscribe((res) => {
      //console.log(res);
      this.data = res;
      // this.user = this.data;
      this.email = this.data.matricule;
      this.name = this.data.modele;
      this.username = this.data.couleur;
      // console.log(this.user);
      console.log(this.email);
      console.log(this.name);
      console.log(this.username);
    });

  }

  getUserData() {
    this.userservice.getUserById(this.id).subscribe((res) => {
      //console.log(res);
      this.data = res;
      this.user = this.data;
      this.email = this.data.nombreVoitures;
      this.name = this.user.adresse;
      this.username = this.data.numTelephone;
      console.log(this.user);
      console.log(this.email);
      console.log(this.name);
      console.log(this.username);
    });
  }

  // updateEmployee() {
  //   this.userservice.UpdateUser(this.id, this.user).subscribe((res) => {});
  // }
  update(){
    
  }
}
