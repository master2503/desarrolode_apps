import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonItem, IonList, IonLabel, IonFooter, IonCardTitle } from '@ionic/angular/standalone'; 
// Nota: La importación de IonMenu no es completamente visible, pero es probable que esté ahí.

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
  // El decorador @Component asume standalone: true por la sintaxis de 'imports'
  imports: [IonFooter,
    IonLabel,
    IonList,
    IonItem,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenuButton,
    RouterLink
    // IonMenuButton, // Estos pueden estar en la línea de importación principal o agregados aquí.
    // IonMenu 
    , IonCardTitle]
})
export class HomePage {
  constructor() {}
}