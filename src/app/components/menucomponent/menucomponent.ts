import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menucomponent',
  imports: [MatToolbarModule,MatButtonModule,
            MatIconModule,MatMenuModule,RouterLink, MatDividerModule],
  templateUrl: './menucomponent.html',
  styleUrls: ['./menucomponent.css'],
})
export class Menucomponent {}
