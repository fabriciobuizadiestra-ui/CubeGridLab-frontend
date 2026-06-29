import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from '../../models/User';
import { Role } from '../../models/Role';
import { UserRoleDTO } from '../../models/user-role';
import { Roleservice } from '../../services/roleservice';
import { UserRoleService } from '../../services/user-roleservice';
import { Userservice } from '../../services/userservice';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user-role',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatIconModule,
    MatInputModule
  ],
  templateUrl: './user-rolecomponent.html',
  styleUrl: './user-rolecomponent.css',
})
export class UserRoleComponent implements OnInit {
  form: FormGroup;
  users: User[] = [];
  roles: Role[] = [];
  dataSource = new MatTableDataSource<UserRoleDTO>();
  displayedColumns: string[] = ['id', 'usuario', 'rol', 'eliminar'];

  constructor(
    private formBuilder: FormBuilder,
    private userService: Userservice,
    private roleService: Roleservice,
    private userRoleService: UserRoleService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      idUser: ['', Validators.required],
      idRole: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadUsers();
    this.loadRoles();
    this.loadUserRoles();
  }

  loadUsers(): void {
    this.userService.list().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error(err);
        this.showMessage('No se pudieron cargar los usuarios.');
      },
    });
  }

  loadRoles(): void {
    this.roleService.getRoles().subscribe({
      next: (data: Role[]) => {
        this.roles = data;
      },
      error: (err: unknown) => {
        console.error(err);
        this.showMessage('No se pudieron cargar los roles.');
      },
    });
  }

  loadUserRoles(): void {
    this.userRoleService.getUserRoles().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (err) => {
        console.error(err);
        this.showMessage('No se pudieron cargar las asignaciones.');
      },
    });
  }

  asignar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.showMessage('Complete todos los campos del formulario.');
      return;
    }

    const payload = {
      idUser: Number(this.form.value.idUser),
      idRole: Number(this.form.value.idRole),
    };

    this.userRoleService.assignRole(payload).subscribe({
      next: () => {
        this.loadUserRoles();
        this.form.reset();
        this.showMessage('Rol asignado correctamente.');
      },
      error: (err) => {
        console.error(err);
        this.showMessage('No se pudo asignar el rol.');
      },
    });
  }

  private showMessage(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  eliminar(id: number){
    this.userRoleService.eliminar(id).subscribe((data)=>{
      this.userRoleService.getUserRoles().subscribe((data)=>{
        this.dataSource.data=data;
      })
    })
  }

}
