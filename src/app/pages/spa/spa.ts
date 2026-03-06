import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-spa',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './spa.html',
  styleUrl: './spa.css'
})
export class SpaComponent {}
