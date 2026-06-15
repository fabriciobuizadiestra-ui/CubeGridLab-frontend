import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-modulocomponent',
  imports: [RouterOutlet],
  templateUrl: './modulocomponent.html',
  styleUrl: './modulocomponent.css',
})
export class Modulocomponent {
  constructor(public route: ActivatedRoute) {}
}
