import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Menucomponent } from './components/menucomponent/menucomponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menucomponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('CubeGridLabFront');
  protected readonly router = inject(Router);
}
