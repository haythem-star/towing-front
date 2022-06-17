import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vehicule } from '../model/vehicule';
Vehicule
const baseUrl = 'http://localhost:8000/api/';
@Injectable({
  providedIn: 'root'
})
export class VehiculeserviceService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(baseUrl+'voitures');
  }
  get(id: any): Observable<Vehicule> {
    return this.http.get(`${baseUrl}voiture/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}voiture/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}voiture/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl+'voitures');
  }
  findByTitle(title: any): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(`${baseUrl}?title=${title}`);
  }
}
