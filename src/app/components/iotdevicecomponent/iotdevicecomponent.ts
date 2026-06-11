import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { IotdeviceListar } from './iotdevice-listar/iotdevice-listar';

@Component({
  selector: 'app-iotdevicecomponent',
  imports: [RouterOutlet, IotdeviceListar],
  templateUrl: './iotdevicecomponent.html',
  styleUrl: './iotdevicecomponent.css',
})
export class Iotdevicecomponent {

  constructor(public route:ActivatedRoute){}

}
