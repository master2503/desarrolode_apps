import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
    
@Injectable({
  providedIn: 'root'
})
export class Data {

  private apiUrl = 'https://rickandmortyapi.com/api/character'; 

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/personajes`);
  }

  getEliminados(): Observable<any> {
    return this.http.get(`${this.apiUrl}/eliminados`);
  }

  eliminarPersonaje(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/personajes/${id}`);
  }

  restaurarPersonaje(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/eliminados/${id}/restaurar`, {});
  }
}
