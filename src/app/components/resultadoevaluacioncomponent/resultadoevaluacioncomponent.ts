import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ResultadoevaluacionListar } from './resultadoevaluacion-listar/resultadoevaluacion-listar';

@Component({
  selector: 'app-resultadoevaluacioncomponent',
  imports: [RouterOutlet, ResultadoevaluacionListar],
  templateUrl: './resultadoevaluacioncomponent.html',
  styleUrl: './resultadoevaluacioncomponent.css',
})
export class Resultadoevaluacioncomponent {  

  constructor(public route:ActivatedRoute){}
}
