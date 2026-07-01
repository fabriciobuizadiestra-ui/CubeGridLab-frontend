import 'zone.js';
import 'zone.js/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Loginservice } from './loginservice';
import { LoginDTO } from '../models/LoginDTO';
import { environment } from '../environments/environment.development';

describe('Loginservice', () => {
  let service: Loginservice;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(Loginservice);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should post login request to the auth/login endpoint', () => {
    const request = new LoginDTO();
    request.emailUser = 'test@example.com';
    request.passwordUser = '123456';

    service.login(request).subscribe();

    const req = httpMock.expectOne(`${environment.base}/auth/login`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(request);
    req.flush({ jwttoken: 'token-test' });
  });
});
