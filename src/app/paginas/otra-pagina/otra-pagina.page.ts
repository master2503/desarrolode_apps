import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otra-pagina',
  templateUrl: './otra-pagina.page.html',
  styleUrls: ['./otra-pagina.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class OtraPaginaPage implements OnInit {
  tareaInput: string = '';
  tareas: string[] = [];

  constructor() { }

  ngOnInit() {
    const stored = localStorage.getItem('tareas');
    if (stored) {
      try {
        this.tareas = JSON.parse(stored);
      } catch {
        this.tareas = [];
      }
    }
  }

  agregarTarea() {
    const valor = this.tareaInput.trim();
    if (valor.length > 0) {
      this.tareas.push(valor);
      this.tareaInput = '';
      localStorage.setItem('tareas', JSON.stringify(this.tareas));
      console.log('Tareas guardadas:', this.tareas);
    }
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }
}