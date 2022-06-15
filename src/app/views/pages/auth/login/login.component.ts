import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  submitted = false;
  data:any;
  token:any;
  user:any;
  constructor(private formBuilder: FormBuilder, private dataService: UserserviceService,
    private router:Router) { }

    loginForm(){
      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      })
    }

  ngOnInit(): void {
    this.loginForm();
  }

  get f(){
    return this.form.controls;
  }

  submit() {
    this.submitted = true;

    if(this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    
    this.dataService.login(this.form.value).subscribe(res => {
      this.data = res;
      if(this.data.status === 1 ) {
        this.token = this.data.data.token;
        this.user = this.data.user;
        localStorage.setItem('token', this.token);
        localStorage.setItem('user', this.user);
        console.log(this.user);
        this.router.navigate(['/login']);
   


      } else if(this.data.status === 0){


      }
    });
  }

}
