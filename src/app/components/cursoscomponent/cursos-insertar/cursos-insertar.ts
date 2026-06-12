import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { Curso } from '../../../models/Cursos';
import { User } from '../../../models/User';
import { Cursoservice } from '../../../services/cursoservice';
import { Userservice } from '../../../services/userservice';

@Component({
  selector: 'app-cursos-insertar',
  imports: [MatInputModule, MatButtonModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './cursos-insertar.html',
  styleUrl: './cursos-insertar.css',
})
export class CursosInsertar implements OnInit {
  form: FormGroup = new FormGroup({});
  curso: Curso = new Curso();
  docentes: User[] = [];

  constructor(
    private cS: Cursoservice,
    private uS: Userservice,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      docente: ['', Validators.required],
    });

    this.uS.list().subscribe({
      next: (data) => {
        this.docentes = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.curso.nombre = this.form.value.nombre;
      this.curso.descripcion = this.form.value.descripcion;
      this.curso.docente = this.form.value.docente;

      this.cS.insert(this.curso).subscribe({
        next: () => {
          this.router.navigate(['/cursos/listar']);
        },
        error: (err) => {
          console.error('Error en el envio:', err);
        },
      });
    }
  }
}
