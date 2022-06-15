import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MustMatch } from '../confirmed.validator';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
form:FormGroup;
submitted = false;
data:any;

  constructor(private formBuilder: FormBuilder, private dataService: UserserviceService,
      private router:Router) { }

  createForm() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.dataService.registerUser(this.form.value).subscribe(res => {
      this.data = res;
      if(this.data.status === 1 ) {
        this.router.navigate(['/']);


      } else if(this.data.status === 0){

      }
     this.submitted = false;
   /*  this.form.get('name').reset();
     this.form.get('email').reset();
     this.form.get('password').reset();
     this.form.get('confirmPassword').reset();*/

    });
  }
}
