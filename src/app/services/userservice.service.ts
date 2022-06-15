import { Injectable } from '@angular/core';


import {  Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
data:any;
id:any;
  constructor(private httpClient: HttpClient) { }

  login(data: any){

    let header = new HttpHeaders();
    header.append('Content-Type','application/json');
    header.append('Access-Control-Allow-Origin','*')
    return this.httpClient.post(environment.apiUrl+'login',data);

  }
  registerUser(data: any){

    let header = new HttpHeaders();
    header.append('Content-Type','application/json');
    header.append('Access-Control-Allow-Origin','*')
    return this.httpClient.post(environment.apiUrl+'register',data);

  }

 getAll(){

    let header = new HttpHeaders();
    header.append('Content-Type','application/json');
    header.append('Access-Control-Allow-Origin','*')
    return this.httpClient.get(environment.apiUrl+'api/clients',{headers : header});

  }
 /*ajouteruser(){
    return this.httpClient.post(environment.apiUrl+'/ajout/'  );
  }*/
 getUserById(id: any) {
    return this.httpClient.get(environment.apiUrl+'/users/'+ id);
  }
UpdateUser(id:any, data:any) {
    return this.httpClient.post(environment.apiUrl+'/update/' + id, data );
  }
 DeleteUser() {
    return this.httpClient.delete(environment.apiUrl+'/delete/' );
  }
 



}



