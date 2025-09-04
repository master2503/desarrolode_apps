import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number | null = null;

  sumar() {
    this.resultado = this.num1 + this.num2;
  }
}
