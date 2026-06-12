import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { Curso } from '../models/Cursos';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class Cursoservice {
  private url = `${base_url}/cursos`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Curso[]>(this.url);
  }

  insert(curso: Curso) {
    return this.http.post(this.url, curso);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
}
