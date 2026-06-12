import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Modulo } from '../../../models/Modulo';
import { Moduloservice } from '../../../services/moduloservice';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-modulo-listar',
  imports: [MatTableModule, MatIconModule],
  templateUrl: './modulo-listar.html',
  styleUrl: './modulo-listar.css',
})
export class ModuloListar implements OnInit {
  dataSource: MatTableDataSource<Modulo> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4'];

  constructor(private mS: Moduloservice) {}

  ngOnInit(): void {
    this.cargarModulos();
  }

  cargarModulos() {
    this.mS.list().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  eliminar(id: number) {
    this.mS.eliminar(id).subscribe(() => {
      this.cargarModulos();
    });
  }
}
