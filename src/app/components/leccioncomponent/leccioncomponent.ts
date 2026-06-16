import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-leccioncomponent',
  imports: [RouterOutlet],
  templateUrl: './leccioncomponent.html',
  styleUrl: './leccioncomponent.css',
})
export class Leccioncomponent {
  constructor(public route: ActivatedRoute) {}
}
