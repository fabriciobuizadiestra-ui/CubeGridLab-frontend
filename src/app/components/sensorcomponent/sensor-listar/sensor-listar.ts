import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { Sensor } from '../../../models/Sensor';
import { Sensorservice } from '../../../services/sensorservice';

@Component({
  selector: 'app-sensor-listar',
  imports: [MatTableModule, MatIconModule],
  templateUrl: './sensor-listar.html',
  styleUrl: './sensor-listar.css',
})
export class SensorListar {

  dataSource: MatTableDataSource<Sensor> = new MatTableDataSource()
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4','c5','c6', 'c7','c8','c9','c10'];

  constructor(private aS: Sensorservice) { }
  ngOnInit(): void {
    this.cargarSensor()
  }

  cargarSensor(){
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
