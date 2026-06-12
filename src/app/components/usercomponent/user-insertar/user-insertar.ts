import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { User } from '../../../models/User';
import { Userservice } from '../../../services/userservice';
import { Router } from '@angular/router';




@Component({
  selector: 'app-user-insertar',
  imports: [MatInputModule, MatDatepickerModule, MatSelectModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './user-insertar.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './user-insertar.css',
})
export class UserInsertar {
  form:FormGroup= new FormGroup({})
  us:User = new User();
  constructor(
    private uS:Userservice,
    private router:Router,
    private formBuilder:FormBuilder
  ) {}
  ngOnInit():void
  {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }
  aceptar(){
    if(this.form.valid){
      this.us.nameUser=this.form.value.nombre;
      this.us.lastNameUser=this.form.value.apellidos;
      this.us.emailUser=this.form.value.email;
      this.us.passwordUser=this.form.value.contrasena;
      this.uS.insert(this.us).subscribe({
        next:()=>{
          this.router.navigate(['usuarios/listar']);
        }
      })
    }
  }
}
