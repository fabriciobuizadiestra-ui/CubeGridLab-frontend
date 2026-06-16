import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { UserInsert } from '../models/UserInsert';
import { UserUpdate } from '../models/UserUpdate';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})

export class Userservice {
  private url = `${base_url}/users`;
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<User[]>(`${this.url}`);
  }
  insert(u:UserInsert)
  {
    return this.http.post(`${this.url}/registra`,u);
  }
  eliminar(id:number)
  {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
  update(u:UserUpdate)
  {
    return this.http.put(`${this.url}/actualiza`, u, { responseType: 'text' });
  }
  listId(id:number)
  {
    return this.http.get<UserUpdate>(`${this.url}/${id}`)
  }
}
