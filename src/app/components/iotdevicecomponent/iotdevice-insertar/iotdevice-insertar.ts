import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { IoTDevice } from '../../../models/IotDevice';
import { IotDeviceservice } from '../../../services/iotdeviceservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iotdevice-insertar',
  imports: [MatInputModule, MatButtonModule, 
            MatSelectModule, MatDatepickerModule, 
            ReactiveFormsModule],
  templateUrl: './iotdevice-insertar.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './iotdevice-insertar.css',
})
export class IotdeviceInsertar implements OnInit{

  form: FormGroup = new FormGroup({});
  aut:IoTDevice = new IoTDevice();
  estado: {value: number; viewValue: string}[] = [
    {value: 1, viewValue: 'activo'},
    {value: 2, viewValue: 'no activo'},
  ];

  constructor(

    private aS: IotDeviceservice,
    private router:Router,
    private formBuilder: FormBuilder
  ){}
  ngOnInit(): void {

    this.form = this.formBuilder.group({

      nombre:['',Validators.required],
      tipo:['',Validators.required],
      fecharegistro:['',Validators.required],
      estado:['',Validators.required],
      descripcion:['',Validators.required],
    })
  }

  aceptar(){
    if(this.form.valid)

      this.aut.name = this.form.value.nombre;
      this.aut.type = this.form.value.tipo;
      this.aut.registrationDate = this.form.value.fecharegistro;
      this.aut.status = this.form.value.estado;
      this.aut.description = this.form.value.descripcion;
      
      // Nota: Si el backend pide "idUser", asegúrate de asignarlo aquí también. 
      // Ejemplo: this.aut.idUser = 1;

      this.aS.insert(this.aut).subscribe({
        next:()=>{
          this.router.navigate(['/iotdevices/listar'])
        },
        error: (err) => {
          console.error("Error en el envío:", err);
        }

      })
            

  }


}
