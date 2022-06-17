import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Camion } from '../model/camion';

const baseUrl = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class CamionserviceService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Camion[]> {
    return this.http.get<Camion[]>(baseUrl+'camions');
  }
  get(id: any): Observable<Camion> {
    return this.http.get(`${baseUrl}camion/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}camion/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}camion/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl+'camions');
  }
  findByTitle(title: any): Observable<Camion[]> {
    return this.http.get<Camion[]>(`${baseUrl}?title=${title}`);
  }
}
