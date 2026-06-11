import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { IoTDevice } from '../../../models/IotDevice';
import { IotDeviceservice } from '../../../services/iotdeviceservice';


@Component({
  selector: 'app-iotdevice-listar',
  imports: [MatTableModule, MatIconModule],
  templateUrl: './iotdevice-listar.html',
  styleUrl: './iotdevice-listar.css',
})
export class IotdeviceListar implements OnInit{

  dataSource: MatTableDataSource<IoTDevice> = new MatTableDataSource()
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4','c5','c6','c7'];

  constructor(private aS: IotDeviceservice) { }
  ngOnInit(): void {
    this.cargarIotDevice()
  }

  cargarIotDevice(){
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
