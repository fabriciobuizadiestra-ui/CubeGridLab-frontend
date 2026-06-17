import { Component, OnInit, PLATFORM_ID, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-vr-test',
  standalone: true,
  imports: [],
  templateUrl: './vr-test.html',
  styleUrl: './vr-test.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VrTestComponent implements OnInit {

  private platformId = inject(PLATFORM_ID);

  async ngOnInit(): Promise<void> {

    // Evita errores con SSR
    if (isPlatformBrowser(this.platformId)) {

      // Carga A-Frame solo en navegador
      await import('aframe');

      console.log('A-Frame cargado correctamente');

    }
  }
}