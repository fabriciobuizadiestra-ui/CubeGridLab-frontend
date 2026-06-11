import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { IoTDevice } from '../models/IotDevice';

const base_url=environment.base
@Injectable({
  providedIn: 'root',
})
export class IotDeviceservice {
 private url=`${base_url}/iot-devices`

 constructor(private http:HttpClient){}


 list(){
  return this.http.get<IoTDevice[]>(`${this.url}`)
 }

  insert(a: IoTDevice){
    return this.http.post(`${this.url}`, a);
  }

  eliminar(id:number){
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'})

  }

}
