import { Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import { ComponenteApiComponent } from './componente-api/componente-api.component';

export const routes: Routes = [
    
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'componente-api', component: ComponenteApiComponent },

];
