import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserserviceService } from 'src/app/services/userservice.service';
import { FormsModule } from '@angular/forms';
import { CamionserviceService } from 'src/app/services/camionservice.service';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { VehiculeserviceService } from 'src/app/services/vehiculeservice.service';
@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit {

  id: any;
  data: any;
  email: any;
  password : any
  oldPassword : any
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
    
    // this.updateEmployee();
  }

  // getUserData() {
  //   this.userservice.getUserById(this.id).subscribe((res) => {
  //     //console.log(res);
  //     this.data = res;
  //     this.user = this.data;
  //     this.email = this.data.nombreVoitures;
  //     this.name = this.user.adresse;
  //     this.username = this.data.numTelephone;
  //     console.log(this.user);
  //     console.log(this.email);
  //     console.log(this.name);
  //     console.log(this.username);
  //   });
  // }

   updateEmployee() {
    // this.userservice.UpdateUser(this.id, this.user).subscribe((res) => {});
   }
  update(){
    
  }

}
