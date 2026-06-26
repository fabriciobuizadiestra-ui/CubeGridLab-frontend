import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { ResultadoEvaluacion } from '../models/ResultadoEvaluacion';

const base_url=environment.base
@Injectable({
  providedIn: 'root',
})
export class ResultadoEvaluacionservice {
 private url=`${base_url}/resultado-evaluacion`

 constructor(private http:HttpClient){}


 list(){
  return this.http.get<ResultadoEvaluacion[]>(`${this.url}`)
 }

  insert(a: ResultadoEvaluacion){
    return this.http.post(`${this.url}`, a);
  }

  eliminar(id:number){
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'})

  }

}
