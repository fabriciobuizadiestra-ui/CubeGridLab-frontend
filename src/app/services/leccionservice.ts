import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { Leccion } from '../models/Leccion';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class Leccionservice {
  private url = `${base_url}/lecciones`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Leccion[]>(this.url);
  }

  insert(leccion: Leccion) {
    return this.http.post(this.url, leccion);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
}
