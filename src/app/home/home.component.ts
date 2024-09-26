import { Component } from '@angular/core';
import { Foto } from '../interfaces/foto';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  fotos: Foto[] = [
    {
      url_imagen: 'img/359844730_1069989833981259_5067933966138917679_n.jpg',
    },
    {
      url_imagen: 'img/330964633_895503134926972_2411395813012926689_n.jpg',
    },
    {
      url_imagen: 'img/6bc4fd_fa89cbf4f9344027920999d42483a6dc~mv2.jpg',
    },
    {
      url_imagen: 'img/6bc4fd_c706e1165f0d460fb27d4ac825a66b9c~mv2.jpg',
    },
    {
      url_imagen: 'img/317279299_675894357492242_3447221052940738482_n.jpg',
    },
    {
      url_imagen: 'img/6bc4fd_e7cc0ca8d84b4b928c1f72649b69a725~mv2.jpg',
    },
    {
      url_imagen: 'img/314788719_617887126688086_398783252969678026_n.jpg',
    },
    {
      url_imagen: 'img/6bc4fd_34b503327db242ad8d9848dbfdd33e96~mv2.png',
    },
    {
      url_imagen: 'img/6bc4fd_f9fb2f32e3a0435d9d7365b8836902dd~mv2.jpg',
    },
    {
      url_imagen: 'img/293961633_770762254160183_2413104857381638305_n.jpg',
    },
  ];
}
