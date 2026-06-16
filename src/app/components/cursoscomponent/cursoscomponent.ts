import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CursosListar } from './cursos-listar/cursos-listar';

@Component({
  selector: 'app-cursoscomponent',
  imports: [RouterOutlet, CursosListar],
  templateUrl: './cursoscomponent.html',
  styleUrl: './cursoscomponent.css',
})
export class Cursoscomponent {
  constructor(public route: ActivatedRoute) {}
}
