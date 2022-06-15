import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserserviceService } from 'src/app/services/userservice.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditProfileComponent implements OnInit {
  id: any;
  data: any;
  email:any;
  name:any;
  username:any;
  user = new User();
  //user:any;
  constructor(private route:ActivatedRoute, private userservice:UserserviceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
    this.updateEmployee();
  }


  getData(){
    this.userservice.getUserById(this.id).subscribe(res => {
      //console.log(res);
       this.data = res;
       this.user = this.data;
       this.email = this.user.email;
       this.name = this.user.name;
       this.username = this.user.username;
       console.log(this.user);
       console.log(this.email);
       console.log(this.name);
       console.log(this.username);
    })

  }

  updateEmployee(){
    this.userservice.UpdateUser(this.id, this.user).subscribe(res => {


    });
  }

}
