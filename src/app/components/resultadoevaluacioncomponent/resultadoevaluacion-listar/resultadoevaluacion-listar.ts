import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { ResultadoEvaluacion } from '../../../models/ResultadoEvaluacion';
import { ResultadoEvaluacionservice } from '../../../services/resultadoevaluacionservice';

@Component({
  selector: 'app-resultadoevaluacion-listar',
  imports: [MatTableModule, MatIconModule],
  templateUrl: './resultadoevaluacion-listar.html',
  styleUrl: './resultadoevaluacion-listar.css',
})
export class ResultadoevaluacionListar implements OnInit {

   dataSource: MatTableDataSource<ResultadoEvaluacion> = new MatTableDataSource()
    displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4','c5','c6'];
  
    constructor(private aS: ResultadoEvaluacionservice) { }
    ngOnInit(): void {
      this.cargarResultadoEvaluacion()
    }
  
    cargarResultadoEvaluacion(){
      this.aS.list().subscribe({
        next:(data)=>{
          this.dataSource.data=data
        }
      })
    }
  
    eliminar(id: number){
      this.aS.eliminar(id).subscribe(
        data=>{
          this.aS.list().subscribe(
            data=>{
              this.dataSource.data = data;
  
            }
          )
        })
  
    }


}
