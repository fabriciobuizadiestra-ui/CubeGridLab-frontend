import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { Modulo } from '../models/Modulo';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class Moduloservice {
  private url = `${base_url}/modulos`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Modulo[]>(this.url);
  }

  insert(modulo: Modulo) {
    return this.http.post(this.url, modulo);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
}
