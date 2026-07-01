import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LoginDTO } from '../models/LoginDTO';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Loginservice {
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  login(request: LoginDTO) {
    return this.http.post<{ jwttoken?: string; token?: string; accessToken?: string }>(
      `${environment.base}/auth/login`,
      request
    );
  }

  verificar(): boolean {
    if (!this.isBrowser()) {
      return false;
    }

    const token = sessionStorage.getItem('token');
    return token != null && token.length > 0;
  }

  showRole(): string | null {
    if (!this.isBrowser()) {
      return null;
    }

    const token = sessionStorage.getItem('token');

    if (!token) {
      return null;
    }

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);

    return decodedToken?.roles ?? null;
  }
}