import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { SensorListar } from './sensor-listar/sensor-listar';

@Component({
  selector: 'app-sensorcomponent',
  imports: [RouterOutlet, SensorListar],
  templateUrl: './sensorcomponent.html',
  styleUrl: './sensorcomponent.css',
})
export class Sensorcomponent {

  constructor(public route:ActivatedRoute){}

}
