import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Leccion } from '../../../models/Leccion';
import { Leccionservice } from '../../../services/leccionservice';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-leccion-listar',
  imports: [MatTableModule, MatIconModule],
  templateUrl: './leccion-listar.html',
  styleUrl: './leccion-listar.css',
})
export class LeccionListar implements OnInit {
  dataSource: MatTableDataSource<Leccion> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4'];

  constructor(private lS: Leccionservice) {}

  ngOnInit(): void {
    this.cargarLecciones();
  }

  cargarLecciones() {
    this.lS.list().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  eliminar(id: number) {
    this.lS.eliminar(id).subscribe(() => {
      this.cargarLecciones();
    });
  }
}
