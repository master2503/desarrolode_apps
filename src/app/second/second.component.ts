import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  nuevoProducto: string = '';
  productos: string[] = [];

  agregarProducto() {
    if (this.nuevoProducto.trim()) {
      this.productos.push(this.nuevoProducto.trim());
      this.nuevoProducto = '';
    }
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
  }

  limpiarLista() {
    this.productos = [];
  }
}