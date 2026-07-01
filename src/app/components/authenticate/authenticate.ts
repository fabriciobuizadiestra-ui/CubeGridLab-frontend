import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Loginservice } from '../../services/loginservice';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginDTO } from '../../models/LoginDTO';


@Component({
  selector: 'app-authenticate',
  imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './authenticate.html',
  styleUrl: './authenticate.css',
})
export class Authenticate implements OnInit {
  constructor(
    private loginService: Loginservice,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  email: string = '';
  password: string = '';
  mensaje: string = '';
  ngOnInit(): void { }

  login() {
    const request = new LoginDTO();
    request.emailUser = this.email.trim();
    request.passwordUser = this.password;

    this.loginService.login(request).subscribe({
      next: (data) => {
        const token = data.jwttoken ?? data.token ?? data.accessToken;

        if (!token) {
          this.snackBar.open('La respuesta del servidor no contiene un token válido', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          return;
        }

        sessionStorage.setItem('token', token);
        this.router.navigate(['/homes']);
      },
      error: (error) => {
        console.error(error);

        if (error.status === 401) {
          this.snackBar.open('Correo o contraseña incorrectos', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        } else {
          this.snackBar.open('Ocurrió un error al iniciar sesión', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      },
    });
  }
}

