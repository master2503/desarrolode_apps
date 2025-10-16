import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Data } from '../../services/data';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule, IonicModule, HttpClientModule],
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss']
})
export class PersonajesPage implements OnInit {

  personajes: any[] = [];
  eliminados: any[] = [];

  constructor(private data: Data) {}

  ngOnInit() {
    this.cargarPersonajes();
    this.cargarEliminados();
  }

  cargarPersonajes() {
    (this.data as any).getPersonajes().subscribe((res: any) => {
      this.personajes = res.results; // la API devuelve results[]
    });
  }

  cargarEliminados() {
    const guardados = localStorage.getItem('eliminados');
    this.eliminados = guardados ? JSON.parse(guardados) : [];
  }

  matar(personaje: any) {
    this.eliminados.push(personaje);
    localStorage.setItem('eliminados', JSON.stringify(this.eliminados));
    this.personajes = this.personajes.filter(p => p.id !== personaje.id);
  }
}
