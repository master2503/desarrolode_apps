import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-componente-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-api.component.html',
  styleUrls: ['./componente-api.component.css']
})
export class ComponenteApiComponent {
  personajes: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPersonajes().subscribe((data: any) => {
      this.personajes = data.results;
    });
  }
}
