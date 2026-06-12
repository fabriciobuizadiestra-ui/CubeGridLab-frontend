import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { Sensor } from '../models/Sensor';

const base_url=environment.base
@Injectable({
  providedIn: 'root',
})
export class Sensorservice {
 private url=`${base_url}/sensors`

 constructor(private http:HttpClient){}


 list(){
  return this.http.get<Sensor[]>(`${this.url}`)
 }

  insert(a: Sensor){
    return this.http.post(`${this.url}`, a);
  }

  eliminar(id:number){
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'})

  }

}
