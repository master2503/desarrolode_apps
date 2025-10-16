import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data {

  private apiUrl = 'https://rickandmortyapi.com/api/character'; // o la URL que uses

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
