import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Curso } from '../../../models/Cursos';
import { Cursoservice } from '../../../services/cursoservice';

@Component({
  selector: 'app-cursos-listar',
  imports: [MatTableModule, MatIconModule],
  templateUrl: './cursos-listar.html',
  styleUrl: './cursos-listar.css',
})
export class CursosListar implements OnInit {
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5'];

  constructor(private cS: Cursoservice) {}

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos() {
    this.cS.list().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  eliminar(id: number) {
    this.cS.eliminar(id).subscribe(() => {
      this.cargarCursos();
    });
  }
}
