import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UserUpdate } from '../../../models/UserUpdate';
import { Userservice } from '../../../services/userservice';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user-actualizar',
  imports: [
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './user-actualizar.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './user-actualizar.css',
})
export class UserActualizar implements OnInit{
  form: FormGroup = new FormGroup({});
  us: UserUpdate = new UserUpdate();
  id:number = 0
  constructor(
    private uS: Userservice,
    private router: Router,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      //cargar data
      this.init()
    });
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }
  aceptar() {
    if (this.form.valid) {
      this.us.idUser = this.id;
      this.us.nameUser = this.form.value.nombre;
      this.us.lastNameUser = this.form.value.apellidos;
      this.us.emailUser = this.form.value.email;
      this.us.passwordUser = this.form.value.contrasena;
      //console.log('Objeto enviado:', this.us);  // ← Aquí verás el objeto
      this.uS.update(this.us).subscribe({
        next: () => {
          this.router.navigate(['usuarios/listar']);
        },
      });
    }
  }
  init()
  {
    this.uS.listId(this.id).subscribe(data=>{
      this.form.patchValue({
        codigo:data.idUser,
        nombre:data.nameUser,
        apellidos:data.lastNameUser,
        email:data.emailUser,
      })
    })
  }
}
