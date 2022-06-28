import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { id } from '@swimlane/ngx-datatable';
// import { Camion } from '../model/camion';

const baseUrl = 'http://localhost:8000/api/demandes';
const baseUrl2 = 'http://localhost:8000/api/demande';
@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(baseUrl);
  }
  
  getdemandeByid(id: any) {
   return this.http.get(baseUrl2+'/'+ id);
  }

  EnvoyerDemandes(data: any){
    return this.http.post(baseUrl2 +'/api/demande/', data );
  }
  // create(data: any): Observable<any> {
  //   return this.http.post(baseUrl, data);
  // }
  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }
  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }
  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }
  // findByTitle(title: any): Observable<Camion[]> {
  //   return this.http.get<Camion[]>(`${baseUrl}?title=${title}`);
  // }
}
