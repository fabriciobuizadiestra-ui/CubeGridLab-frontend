import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { Leccion } from '../../../models/Leccion';
import { Modulo } from '../../../models/Modulo';
import { Leccionservice } from '../../../services/leccionservice';
import { Moduloservice } from '../../../services/moduloservice';

@Component({
  selector: 'app-leccion-insertar',
  imports: [MatInputModule, MatButtonModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './leccion-insertar.html',
  styleUrl: './leccion-insertar.css',
})
export class LeccionInsertar implements OnInit {
  form: FormGroup = new FormGroup({});
  leccion: Leccion = new Leccion();
  modulos: Modulo[] = [];

  constructor(
    private lS: Leccionservice,
    private mS: Moduloservice,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', Validators.required],
      contenido: ['', Validators.required],
      modulo: ['', Validators.required],
    });

    this.mS.list().subscribe({
      next: (data) => {
        this.modulos = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.leccion.titulo = this.form.value.titulo;
      this.leccion.contenido = this.form.value.contenido;
      this.leccion.modulo = this.form.value.modulo;

      this.lS.insert(this.leccion).subscribe({
        next: () => {
          this.router.navigate(['/lecciones/listar']);
        },
        error: (err) => {
          console.error('Error en el envio:', err);
        },
      });
    }
  }
}
