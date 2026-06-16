import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { Modulo } from '../../../models/Modulo';
import { Curso } from '../../../models/Cursos';
import { Moduloservice } from '../../../services/moduloservice';
import { Cursoservice } from '../../../services/cursoservice';

@Component({
  selector: 'app-modulo-insertar',
  imports: [MatInputModule, MatButtonModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './modulo-insertar.html',
  styleUrl: './modulo-insertar.css',
})
export class ModuloInsertar implements OnInit {
  form: FormGroup = new FormGroup({});
  modulo: Modulo = new Modulo();
  cursos: Curso[] = [];

  constructor(
    private mS: Moduloservice,
    private cS: Cursoservice,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      curso: ['', Validators.required],
    });

    this.cS.list().subscribe({
      next: (data) => {
        this.cursos = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.modulo.nombre = this.form.value.nombre;
      this.modulo.curso = this.form.value.curso;

      this.mS.insert(this.modulo).subscribe({
        next: () => {
          this.router.navigate(['/modulos/listar']);
        },
        error: (err) => {
          console.error('Error en el envio:', err);
        },
      });
    }
  }
}
