import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { UserRoleDTO } from '../models/user-role';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  private url = `${base_url}/user-roles`;

  constructor(private http: HttpClient) {}

  getUserRoles(): Observable<UserRoleDTO[]> {
    return this.http.get<UserRoleDTO[]>(`${this.url}`);
  }

  assignRole(data: { idUser: number; idRole: number }): Observable<any> {
    return this.http.post(`${this.url}/asignar`, data);
  }
  
  eliminar(id:number)
  {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
}
