import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tarjeta } from './tarjeta/tarjeta';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [Tarjeta, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tarea-presentacion');
  nombre: string = '';
  edad: number = 0;
}
