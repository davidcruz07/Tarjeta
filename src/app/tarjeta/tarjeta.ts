import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarjeta',
  imports: [FormsModule],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  @Input() nombre: string = '';
  @Input() edad: number = 0;
  


  contador: number = 0;
  
  incrementarContador(): void {
    this.contador++;
  }

  resetearContador(): void {
    this.contador = 0;
  }


}

