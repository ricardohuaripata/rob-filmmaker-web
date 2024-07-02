import { Routes } from '@angular/router';
import { FotosComponent } from './fotos/fotos.component';
import { VideosComponent } from './videos/videos.component';
import { FotosCategoriaComponent } from './fotos-categoria/fotos-categoria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'ROB | Fotógrafo / Filmmaker'
  },
  {
    path: 'fotos',
    component: FotosComponent,
    title: 'Fotos | ROB'
  },
  {
    path: 'fotos/:id',
    component: FotosCategoriaComponent,
    title: 'Fotos Categoria | ROB'
  },
  {
    path: 'videos',
    component: VideosComponent,
    title: 'Videos | ROB'
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    title: 'Contacto | ROB'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
