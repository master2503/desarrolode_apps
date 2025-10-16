import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-eliminados',
  standalone: true,
  imports: [CommonModule, IonicModule, HttpClientModule],
  templateUrl: './eliminados.page.html',
  styleUrls: ['./eliminados.page.scss']
})
export class EliminadosPage implements OnInit {
  eliminados: any[] = [];

  ngOnInit() {
    this.cargarEliminados();
  }

  cargarEliminados() {
    const guardados = localStorage.getItem('eliminados');
    this.eliminados = guardados ? JSON.parse(guardados) : [];
  }

  // 👉 ESTE ES EL MÉTODO QUE FALTABA
  restaurar(personaje: any) {
    // Recuperar los personajes almacenados (si existen)
    const guardados = localStorage.getItem('personajes');
    let personajes = guardados ? JSON.parse(guardados) : [];

    // Agregar el personaje de nuevo
    personajes.push(personaje);
    localStorage.setItem('personajes', JSON.stringify(personajes));

    // Eliminarlo del arreglo de eliminados
    this.eliminados = this.eliminados.filter(p => p.id !== personaje.id);
    localStorage.setItem('eliminados', JSON.stringify(this.eliminados));

    // Actualizar la lista
    this.cargarEliminados();
  }
}
