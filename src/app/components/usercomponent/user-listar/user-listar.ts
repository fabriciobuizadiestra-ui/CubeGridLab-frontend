import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from '../../../models/User';
import { Userservice } from '../../../services/userservice';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-user-listar',
  imports: [MatTableModule, MatIconModule],
  templateUrl: './user-listar.html',
  styleUrl: './user-listar.css',
})
export class UserListar implements OnInit{
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4'];
  constructor(private uS: Userservice) {}
  ngOnInit(): void {
    this.cargarUsuarios();
  }
  cargarUsuarios()
  {
    this.uS.list().subscribe({
      next:(data)=>{
        this.dataSource.data=data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  
  eliminar(id: number){
    this.uS.eliminar(id).subscribe((data)=>{
      this.uS.list().subscribe((data)=>{
        this.dataSource.data=data;
      })
    })
  }
}
