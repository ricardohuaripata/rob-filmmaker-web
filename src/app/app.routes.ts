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
  },
  {
    path: 'fotos',
    component: FotosComponent,
  },
  {
    path: 'fotos/:id',
    component: FotosCategoriaComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
