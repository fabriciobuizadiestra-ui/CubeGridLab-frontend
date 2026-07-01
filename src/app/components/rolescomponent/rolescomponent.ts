import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Role } from '../../models/Role';
import { RoleUserCount } from '../../models/QuantityUsersByRoleDTO';
import { Roleservice } from '../../services/roleservice';

@Component({
  selector: 'app-rolescomponent',
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './rolescomponent.html',
  styleUrl: './rolescomponent.css',
})
export class RolesComponent implements OnInit {
  roles: Role[] = [];
  roleCounts: RoleUserCount[] = [];
  roleCountByName: Record<string, number> = {};
  loading = false;

  constructor(private rolesService: Roleservice, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.loadRoles();
    this.loadRoleCounts();
  }

  private loadRoles(): void {
    this.rolesService.getRoles().subscribe({
      next: (data) => {
        this.roles = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error cargando roles:', err);
        this.loading = false;
        this.showMessage('No se pudieron cargar los roles.');
      },
    });
  }

  private loadRoleCounts(): void {
    this.rolesService.getUsersCountByRole().subscribe({
      next: (data: RoleUserCount[]) => {
        this.roleCounts = data;
        this.roleCountByName = data.reduce((acc, current) => {
          acc[current.nameRole] = current.quantityUsers ?? 0;
          return acc;
        }, {} as Record<string, number>);
      },
      error: (err) => {
        console.error('Error cargando la cantidad de usuarios por rol:', err);
        this.showMessage('No se pudo cargar la cantidad de usuarios por rol.');
      },
    });
  }

  getUserCount(role: Role): number {
    return this.roleCountByName[role.nameRole] ?? 0;
  }

  refresh(): void {
    this.loadData();
  }

  private showMessage(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
