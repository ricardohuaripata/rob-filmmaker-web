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
      url_imagen:
        'https://res.cloudinary.com/dmravgyts/image/upload/v1728176256/projects/rob-profile/330964633_895503134926972_2411395813012926689_n_d6xzai.jpg',
    },
    {
      url_imagen:
        'https://res.cloudinary.com/dmravgyts/image/upload/v1728176256/projects/rob-profile/317279299_675894357492242_3447221052940738482_n_kztipf.jpg',
    },
    {
      url_imagen:
        'https://res.cloudinary.com/dmravgyts/image/upload/v1728176257/projects/rob-profile/6bc4fd_fa89cbf4f9344027920999d42483a6dc_mv2_jd3v1e.jpg',
    },
    {
      url_imagen:
        'https://res.cloudinary.com/dmravgyts/image/upload/v1728176256/projects/rob-profile/6bc4fd_e7cc0ca8d84b4b928c1f72649b69a725_mv2_nu33pt.jpg',
    },
    {
      url_imagen:
        'https://res.cloudinary.com/dmravgyts/image/upload/v1728176256/projects/rob-profile/6bc4fd_f9fb2f32e3a0435d9d7365b8836902dd_mv2_sf6ej6.jpg',
    },
    {
      url_imagen:
        'https://res.cloudinary.com/dmravgyts/image/upload/v1728176256/projects/rob-profile/6bc4fd_c706e1165f0d460fb27d4ac825a66b9c_mv2_gylspx.jpg',
    },
    {
      url_imagen:
        'https://res.cloudinary.com/dmravgyts/image/upload/v1728176256/projects/rob-profile/359844730_1069989833981259_5067933966138917679_n_w4edv0.jpg',
    },
    {
      url_imagen:
        'https://res.cloudinary.com/dmravgyts/image/upload/v1728176256/projects/rob-profile/299042547_444799660908727_9080362761450670684_n_n5nxyc.jpg',
    },
    {
      url_imagen:
        'https://res.cloudinary.com/dmravgyts/image/upload/v1728176258/projects/rob-profile/293961633_770762254160183_2413104857381638305_n_epeknf.jpg',
    },
    {
      url_imagen:
        'https://res.cloudinary.com/dmravgyts/image/upload/v1728176256/projects/rob-profile/314788719_617887126688086_398783252969678026_n_dju6gf.jpg',
    },
  ];
}
