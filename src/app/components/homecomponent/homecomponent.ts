import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, Renderer2, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-homecomponent',
  imports: [],
  templateUrl: './homecomponent.html',
  styleUrls: ['./homecomponent.css'],
})
export class Homecomponent implements OnInit, AfterViewInit, OnDestroy {

  private platformId = inject(PLATFORM_ID);

  @ViewChild('mobileMenu', { static: false }) mobileMenu?: ElementRef<HTMLElement>;
  @ViewChild('navegacion', { static: false }) navegacion?: ElementRef<HTMLElement>;
  @ViewChild('headerTexto', { static: false }) headerTexto?: ElementRef<HTMLElement>;

  private listeners: Array<() => void> = [];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Listener para el botón hamburguesa
    if (this.mobileMenu) {
      const unlisten = this.renderer.listen(this.mobileMenu.nativeElement, 'click', () => {
        this.toggleNav();
        this.toggleHeader();
        this.toggleMenuIcon();
      });
      this.listeners.push(unlisten);
    }

    this.initSwiper();
  }

  ngOnDestroy(): void {
    this.listeners.forEach(unlisten => unlisten());
    this.listeners = [];
  }

  private toggleNav(): void {
    if (!this.navegacion) return;
    const navEl = this.navegacion.nativeElement;
    if (navEl.classList.contains('mostrar')) {
      this.renderer.removeClass(navEl, 'mostrar');
    } else {
      this.renderer.addClass(navEl, 'mostrar');
    }
  }

  private toggleHeader(): void {
    if (!this.headerTexto) return;
    const headerEl = this.headerTexto.nativeElement;
    if (headerEl.classList.contains('margin_responsive')) {
      this.renderer.removeClass(headerEl, 'margin_responsive');
    } else {
      this.renderer.addClass(headerEl, 'margin_responsive');
    }
  }

  private toggleMenuIcon(): void {
    if (!this.mobileMenu) return;
    const menuEl = this.mobileMenu.nativeElement;
    if (menuEl.classList.contains('active')) {
      this.renderer.removeClass(menuEl, 'active');
    } else {
      this.renderer.addClass(menuEl, 'active');
    }
  }

  private initSwiper(): void {
    Swiper.use([Navigation, Pagination]);

    // Iniciar solo si hay elementos en DOM que coincidan
    try {
      // Guardar la instancia solo si se necesita más tarde (no usado ahora)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const s = new Swiper('.slider-wrapper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          620: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }
      });
    } catch (e) {
      // Si no hay DOM o Swiper falla, no romper la app
      // console.warn('Swiper init failed', e);
    }
  }
}