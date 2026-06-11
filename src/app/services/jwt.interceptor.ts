import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  // Inyectamos el ID de la plataforma actual (Servidor o Navegador)
  const platformId = inject(PLATFORM_ID);

  // Verificamos si estamos corriendo del lado del cliente (navegador)
  if (isPlatformBrowser(platformId)) {
    const token = localStorage.getItem('access_token'); // Ahora sí es seguro usarlo

    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next(cloned);
    }
  }

  // Si estamos en el servidor o no hay token, la petición continúa normal
  return next(req);
};