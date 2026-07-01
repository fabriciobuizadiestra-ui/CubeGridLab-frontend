import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { Role } from '../models/Role';
import { RoleUserCount } from '../models/QuantityUsersByRoleDTO';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class Roleservice {
  private url = `${base_url}/roles`;

  constructor(private http: HttpClient) {}

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.url}/listar`);
  }

  getUsersCountByRole(): Observable<RoleUserCount[]> {
    return this.http.get<RoleUserCount[]>(`${this.url}/cantidad-de-usuarios`);
  }
}
