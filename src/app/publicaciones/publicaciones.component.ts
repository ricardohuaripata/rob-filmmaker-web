import { Component } from '@angular/core';
import { Foto } from '../interfaces/foto';

@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.scss',
})
export class PublicacionesComponent {
  fotos: Foto[] = [
    {
      url_imagen:
        'img/359844730_1069989833981259_5067933966138917679_n.jpg',
    },
    {
      url_imagen:
        'img/330964633_895503134926972_2411395813012926689_n.jpg',
    },
    {
      url_imagen:
        'img/375448171_207132952364756_8203694521473065885_n.jpg',
    },
    {
      url_imagen:
        'img/299042547_444799660908727_9080362761450670684_n.jpg',
    },
    {
      url_imagen:
        'img/317279299_675894357492242_3447221052940738482_n.jpg',
    },
    {
      url_imagen:
        'img/332989714_704046508087642_3931669779734086792_n.jpg',
    },
    {
      url_imagen:
        'img/317495882_607628197831170_7116556930051207617_n.jpg',
    },
    {
      url_imagen:
        'img/358169045_225226720411926_3897751625560203471_n.jpg',
    },
    {
      url_imagen:
        'img/332925967_1302895347322459_6600300186008720346_n.jpg',
    },
  ];
}
