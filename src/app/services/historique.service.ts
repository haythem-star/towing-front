import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { Camion } from '../model/camion';

const baseUrl = 'http://localhost:8000/api/historiques';
@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(baseUrl);
  }
  // get(id: any): Observable<Camion> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }
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
