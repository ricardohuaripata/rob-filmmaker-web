import { Routes } from '@angular/router';
import { FotosComponent } from './fotos/fotos.component';
import { VideosComponent } from './videos/videos.component';
import { FotosCategoriaComponent } from './fotos-categoria/fotos-categoria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { Foto } from './interfaces/foto';
import { FotoCategoria } from './interfaces/foto-categoria';
import { Video } from './interfaces/video';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

const fotosCategorias: FotoCategoria[] = [
  {
    id: 'artistas',
    titulo: 'Artistas',
    url_imagen_portada:
      'https://static.wixstatic.com/media/6bc4fd_06c66b42444a4604a11efec002134c79~mv2.jpg/v1/fill/w_396,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PORTADA-FOTOS-ARTISTAS.jpg',
    fotos: [
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_2bf39450116942148e3163ad580c266a~mv2.jpg/v1/fill/w_532,h_532,q_90/6bc4fd_2bf39450116942148e3163ad580c266a~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_2bf39450116942148e3163ad580c266a~mv2.jpg/v1/fit/w_1226,h_805,q_90/6bc4fd_2bf39450116942148e3163ad580c266a~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg/v1/fit/w_1226,h_805,q_90/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg/v1/fill/w_385,h_385,q_90/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg/v1/fit/w_1226,h_805,q_90/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg/v1/fill/w_386,h_385,fp_0.39_0.35,q_90/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg/v1/fit/w_1226,h_805,q_90/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg/v1/fill/w_353,h_352,fp_0.49_0.44,q_90/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg/v1/fit/w_1226,h_805,q_90/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg/v1/fill/w_384,h_384,q_90/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg/v1/fit/w_1226,h_805,q_90/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg/v1/fill/w_385,h_384,fp_0.62_0.57,q_90/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg/v1/fit/w_1226,h_805,q_90/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg/v1/fill/w_385,h_384,q_90/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg/v1/fit/w_1226,h_805,q_90/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg/v1/fill/w_428,h_428,q_90/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg/v1/fit/w_1226,h_805,q_90/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg/v1/fill/w_429,h_428,fp_0.35_0.57,q_90/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg/v1/fit/w_1226,h_805,q_90/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg/v1/fill/w_429,h_428,q_90/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg/v1/fit/w_1226,h_805,q_90/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_ebf252faa7a04ce0b84b3b7019d53dc0~mv2.jpg/v1/fill/w_428,h_428,q_90/6bc4fd_ebf252faa7a04ce0b84b3b7019d53dc0~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_ebf252faa7a04ce0b84b3b7019d53dc0~mv2.jpg/v1/fit/w_1226,h_805,q_90/6bc4fd_ebf252faa7a04ce0b84b3b7019d53dc0~mv2.jpg',
      },
    ],
  },
  {
    id: 'festivales',
    titulo: 'Festivales',
    url_imagen_portada:
      'https://static.wixstatic.com/media/6bc4fd_39f51136485f4d23ad4182ec6adae5a3~mv2.jpg/v1/fill/w_396,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PORTADA-FOTOS-FESTIVALES.jpg',
    fotos: [
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_4c8ef18d9ee648af84f94c781f2b0028~mv2.jpg/v1/fill/w_532,h_532,fp_0.47_0.34,q_90/6bc4fd_4c8ef18d9ee648af84f94c781f2b0028~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_4c8ef18d9ee648af84f94c781f2b0028~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_4c8ef18d9ee648af84f94c781f2b0028~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_cb96b7d359d642ad922b4d07ed7521c2~mv2.jpg/v1/fill/w_385,h_385,fp_0.48_0.32,q_90/6bc4fd_cb96b7d359d642ad922b4d07ed7521c2~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_cb96b7d359d642ad922b4d07ed7521c2~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_cb96b7d359d642ad922b4d07ed7521c2~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_f862d994216d47dcbf1c166acd5bd648~mv2.jpg/v1/fill/w_393,h_393,q_90/6bc4fd_f862d994216d47dcbf1c166acd5bd648~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f862d994216d47dcbf1c166acd5bd648~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_f862d994216d47dcbf1c166acd5bd648~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_207358f7154145ec91e0dfad0a745341~mv2.jpg/v1/fill/w_385,h_385,fp_0.47_0.26,q_90/6bc4fd_207358f7154145ec91e0dfad0a745341~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_207358f7154145ec91e0dfad0a745341~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_207358f7154145ec91e0dfad0a745341~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_9dc29b9be17345e682628b1b9ceec337~mv2.jpg/v1/fill/w_385,h_385,fp_0.27_0.55,q_90/6bc4fd_9dc29b9be17345e682628b1b9ceec337~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_9dc29b9be17345e682628b1b9ceec337~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_9dc29b9be17345e682628b1b9ceec337~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_cbe5b6a47de64fadad164c44aacf396d~mv2.jpg/v1/fill/w_320,h_320,fp_0.52_0.27,q_90/6bc4fd_cbe5b6a47de64fadad164c44aacf396d~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_cbe5b6a47de64fadad164c44aacf396d~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_cbe5b6a47de64fadad164c44aacf396d~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_aa046e41369c40e3b5d1d411fae63175~mv2.jpg/v1/fill/w_320,h_320,fp_0.51_0.27,q_90/6bc4fd_aa046e41369c40e3b5d1d411fae63175~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_aa046e41369c40e3b5d1d411fae63175~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_aa046e41369c40e3b5d1d411fae63175~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_0fddc44318f24a99878a3a681acb21f4~mv2.jpg/v1/fill/w_320,h_320,fp_0.6_0.5,q_90/6bc4fd_0fddc44318f24a99878a3a681acb21f4~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_0fddc44318f24a99878a3a681acb21f4~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_0fddc44318f24a99878a3a681acb21f4~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_a23936e50d8e47dabb345cf197696b04~mv2.jpg/v1/fill/w_320,h_320,fp_0.44_0.35,q_90/6bc4fd_a23936e50d8e47dabb345cf197696b04~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_a23936e50d8e47dabb345cf197696b04~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_a23936e50d8e47dabb345cf197696b04~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_fd61fb0f72f34866a2a80a2cdbc630a4~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_fd61fb0f72f34866a2a80a2cdbc630a4~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_fd61fb0f72f34866a2a80a2cdbc630a4~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_fd61fb0f72f34866a2a80a2cdbc630a4~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_98801b093eea40eb89efd8dd456d7bb4~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_98801b093eea40eb89efd8dd456d7bb4~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_98801b093eea40eb89efd8dd456d7bb4~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_98801b093eea40eb89efd8dd456d7bb4~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_8de9798b6ef04a6793178db9517560bf~mv2.jpg/v1/fill/w_328,h_328,fp_0.56_0.33,q_90/6bc4fd_8de9798b6ef04a6793178db9517560bf~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_8de9798b6ef04a6793178db9517560bf~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_8de9798b6ef04a6793178db9517560bf~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_9304a3f07fd446a5ba1d1e4b059e0681~mv2.jpg/v1/fill/w_328,h_328,q_90/6bc4fd_9304a3f07fd446a5ba1d1e4b059e0681~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_9304a3f07fd446a5ba1d1e4b059e0681~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_9304a3f07fd446a5ba1d1e4b059e0681~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_deb4c74d040043f19ab346e342d44fb7~mv2.jpg/v1/fill/w_329,h_328,fp_0.5_0.29,q_90/6bc4fd_deb4c74d040043f19ab346e342d44fb7~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_deb4c74d040043f19ab346e342d44fb7~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_deb4c74d040043f19ab346e342d44fb7~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_f26dca9bc8f0482698c809c1cc78fe31~mv2.jpg/v1/fill/w_327,h_327,q_90/6bc4fd_f26dca9bc8f0482698c809c1cc78fe31~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f26dca9bc8f0482698c809c1cc78fe31~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_f26dca9bc8f0482698c809c1cc78fe31~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_45b9a301b53f4353970d66547009f421~mv2.jpg/v1/fill/w_328,h_328,fp_0.43_0.4,q_90/6bc4fd_45b9a301b53f4353970d66547009f421~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_45b9a301b53f4353970d66547009f421~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_45b9a301b53f4353970d66547009f421~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_01726f413be241ca8931c8a3d84c94fa~mv2.jpg/v1/fill/w_328,h_327,fp_0.54_0.42,q_90/6bc4fd_01726f413be241ca8931c8a3d84c94fa~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_01726f413be241ca8931c8a3d84c94fa~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_01726f413be241ca8931c8a3d84c94fa~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_857f8ef3774a4a15b7dbec2ec5c92ea3~mv2.jpg/v1/fill/w_393,h_393,fp_0.52_0.38,q_90/6bc4fd_857f8ef3774a4a15b7dbec2ec5c92ea3~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_857f8ef3774a4a15b7dbec2ec5c92ea3~mv2.jpg/v1/fit/w_1069,h_805,q_90/6bc4fd_857f8ef3774a4a15b7dbec2ec5c92ea3~mv2.jpg',
      },
    ],
  },
  {
    id: 'modelos',
    titulo: 'Modelos',
    url_imagen_portada:
      'https://static.wixstatic.com/media/6bc4fd_5695045aa44545859a6af9a14ddcc138~mv2.jpg/v1/fill/w_396,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PORTADA-FOTOGRAFIA-MODELOS.jpg',
    fotos: [
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_8519e8b85d1049d18330941eadd9b9fd~mv2.jpg/v1/fill/w_417,h_417,fp_0.59_0.43,q_90/6bc4fd_8519e8b85d1049d18330941eadd9b9fd~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_8519e8b85d1049d18330941eadd9b9fd~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_8519e8b85d1049d18330941eadd9b9fd~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_72cab7634fd143a89e3dac1b4666a06d~mv2.jpg/v1/fill/w_418,h_417,fp_0.45_0.42,q_90/6bc4fd_72cab7634fd143a89e3dac1b4666a06d~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_72cab7634fd143a89e3dac1b4666a06d~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_72cab7634fd143a89e3dac1b4666a06d~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_a045e5e9a486432fbf711714f7e05c7d~mv2.jpg/v1/fill/w_417,h_417,fp_0.46_0.39,q_90/6bc4fd_a045e5e9a486432fbf711714f7e05c7d~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_a045e5e9a486432fbf711714f7e05c7d~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_a045e5e9a486432fbf711714f7e05c7d~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_cc83789f58264f75b42ceb4d52df3367~mv2.jpg/v1/fill/w_417,h_417,fp_0.44_0.27,q_90/6bc4fd_cc83789f58264f75b42ceb4d52df3367~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_cc83789f58264f75b42ceb4d52df3367~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_cc83789f58264f75b42ceb4d52df3367~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_f3547b9acc704aef88fe63a4acd2bf3c~mv2.jpg/v1/fill/w_418,h_417,fp_0.61_0.46,q_90/6bc4fd_f3547b9acc704aef88fe63a4acd2bf3c~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f3547b9acc704aef88fe63a4acd2bf3c~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_f3547b9acc704aef88fe63a4acd2bf3c~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_f3816626e29e4aed931aacad5b7e982a~mv2.jpg/v1/fill/w_417,h_417,fp_0.52_0.39,q_90/6bc4fd_f3816626e29e4aed931aacad5b7e982a~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f3816626e29e4aed931aacad5b7e982a~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_f3816626e29e4aed931aacad5b7e982a~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_06ed5e142aa248b1b3cf7397a17e0917~mv2.jpg/v1/fill/w_417,h_417,fp_0.52_0.27,q_90/6bc4fd_06ed5e142aa248b1b3cf7397a17e0917~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_06ed5e142aa248b1b3cf7397a17e0917~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_06ed5e142aa248b1b3cf7397a17e0917~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_181b4c3e678146ca8e3dfa9abcb2a487~mv2.jpg/v1/fill/w_418,h_417,fp_0.49_0.46,q_90/6bc4fd_181b4c3e678146ca8e3dfa9abcb2a487~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_181b4c3e678146ca8e3dfa9abcb2a487~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_181b4c3e678146ca8e3dfa9abcb2a487~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_3a10890faf0046fdad7aaa0e46307558~mv2.jpg/v1/fill/w_417,h_417,fp_0.49_0.47,q_90/6bc4fd_3a10890faf0046fdad7aaa0e46307558~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_3a10890faf0046fdad7aaa0e46307558~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_3a10890faf0046fdad7aaa0e46307558~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_aedcd8434dfc432da7059af9a21cf45d~mv2.jpg/v1/fill/w_417,h_417,fp_0.5_0.43,q_90/6bc4fd_aedcd8434dfc432da7059af9a21cf45d~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_aedcd8434dfc432da7059af9a21cf45d~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_aedcd8434dfc432da7059af9a21cf45d~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_8f7fb58e05924aea8958c2fb6267bcca~mv2.jpg/v1/fill/w_418,h_417,fp_0.55_0.48,q_90/6bc4fd_8f7fb58e05924aea8958c2fb6267bcca~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_8f7fb58e05924aea8958c2fb6267bcca~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_8f7fb58e05924aea8958c2fb6267bcca~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_1964aafe1e9b488d9561da15267c2189~mv2.jpg/v1/fill/w_417,h_417,fp_0.54_0.3,q_90/6bc4fd_1964aafe1e9b488d9561da15267c2189~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_1964aafe1e9b488d9561da15267c2189~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_1964aafe1e9b488d9561da15267c2189~mv2.jpg',
      },
    ],
  },
  {
    id: 'urbanas',
    titulo: 'Urbanas',
    url_imagen_portada:
      'https://static.wixstatic.com/media/6bc4fd_9aebcebf0bd2474eabee15984acad479~mv2.jpg/v1/fill/w_396,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PORTADA-FOTOGRAFIA-URBANA.jpg',
    fotos: [
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_54d4c6e3989e4e168c90e3ce236febb9~mv2.jpg/v1/fill/w_451,h_451,q_90/6bc4fd_54d4c6e3989e4e168c90e3ce236febb9~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_54d4c6e3989e4e168c90e3ce236febb9~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_54d4c6e3989e4e168c90e3ce236febb9~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_fa89cbf4f9344027920999d42483a6dc~mv2.jpeg/v1/fill/w_451,h_451,q_90/6bc4fd_fa89cbf4f9344027920999d42483a6dc~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_fa89cbf4f9344027920999d42483a6dc~mv2.jpeg/v1/fit/w_1213,h_1043,q_90/6bc4fd_fa89cbf4f9344027920999d42483a6dc~mv2.jpeg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_f9fb2f32e3a0435d9d7365b8836902dd~mv2.jpg/v1/fill/w_451,h_451,q_90/6bc4fd_f9fb2f32e3a0435d9d7365b8836902dd~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f9fb2f32e3a0435d9d7365b8836902dd~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_f9fb2f32e3a0435d9d7365b8836902dd~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_34b503327db242ad8d9848dbfdd33e96~mv2.png/v1/fill/w_451,h_451,q_90/6bc4fd_34b503327db242ad8d9848dbfdd33e96~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_34b503327db242ad8d9848dbfdd33e96~mv2.png/v1/fit/w_1213,h_1043,q_90/6bc4fd_34b503327db242ad8d9848dbfdd33e96~mv2.png',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_23613cf490c3450aac8d48076c977f4d~mv2.jpg/v1/fill/w_451,h_451,q_90/6bc4fd_23613cf490c3450aac8d48076c977f4d~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_23613cf490c3450aac8d48076c977f4d~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_23613cf490c3450aac8d48076c977f4d~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_b4cff4b80eca42a7be89cf60220e9cea~mv2.png/v1/fill/w_451,h_451,q_90/6bc4fd_b4cff4b80eca42a7be89cf60220e9cea~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_b4cff4b80eca42a7be89cf60220e9cea~mv2.png/v1/fit/w_1213,h_1043,q_90/6bc4fd_b4cff4b80eca42a7be89cf60220e9cea~mv2.png',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_8fd077a5a3e84fc8af23476129619dea~mv2.jpg/v1/fill/w_451,h_451,q_90/6bc4fd_8fd077a5a3e84fc8af23476129619dea~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_8fd077a5a3e84fc8af23476129619dea~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_8fd077a5a3e84fc8af23476129619dea~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_c2f3a27beff64f47b4d7b7d16f9b5d1c~mv2.jpg/v1/fill/w_451,h_451,q_90/6bc4fd_c2f3a27beff64f47b4d7b7d16f9b5d1c~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_c2f3a27beff64f47b4d7b7d16f9b5d1c~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_c2f3a27beff64f47b4d7b7d16f9b5d1c~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_3a108aab710e4d8a8db52db0f91800ae~mv2.jpg/v1/fill/w_451,h_451,q_90/6bc4fd_3a108aab710e4d8a8db52db0f91800ae~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_3a108aab710e4d8a8db52db0f91800ae~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_3a108aab710e4d8a8db52db0f91800ae~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_22b2e0d6a5b34b5590b13bd056560863~mv2.jpg/v1/fill/w_451,h_451,q_90/6bc4fd_22b2e0d6a5b34b5590b13bd056560863~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_22b2e0d6a5b34b5590b13bd056560863~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_22b2e0d6a5b34b5590b13bd056560863~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_c706e1165f0d460fb27d4ac825a66b9c~mv2.jpg/v1/fill/w_451,h_451,q_90/6bc4fd_c706e1165f0d460fb27d4ac825a66b9c~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_c706e1165f0d460fb27d4ac825a66b9c~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_c706e1165f0d460fb27d4ac825a66b9c~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_e7cc0ca8d84b4b928c1f72649b69a725~mv2.jpg/v1/fill/w_451,h_451,q_90/6bc4fd_e7cc0ca8d84b4b928c1f72649b69a725~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_e7cc0ca8d84b4b928c1f72649b69a725~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_e7cc0ca8d84b4b928c1f72649b69a725~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_8865de7788d74cde9a282c4ba45191f6~mv2.jpg/v1/fill/w_451,h_451,q_90/6bc4fd_8865de7788d74cde9a282c4ba45191f6~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_8865de7788d74cde9a282c4ba45191f6~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_8865de7788d74cde9a282c4ba45191f6~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_162675dfe9e94a3f8785178eb8d8a309~mv2.jpg/v1/fill/w_451,h_451,q_90/6bc4fd_162675dfe9e94a3f8785178eb8d8a309~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_162675dfe9e94a3f8785178eb8d8a309~mv2.jpg/v1/fit/w_1213,h_1043,q_90/6bc4fd_162675dfe9e94a3f8785178eb8d8a309~mv2.jpg',
      },
    ],
  },
  {
    id: 'eventos',
    titulo: 'Eventos',
    url_imagen_portada:
      'https://static.wixstatic.com/media/6bc4fd_3b50396daa0a4c199473696fa7515cac~mv2.jpg/v1/fill/w_396,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PORTADAS-FOTOS-EVENTOS.jpg',
    fotos: [
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_289a758675ee49f38674f13a67d14bd7~mv2.jpg/v1/fill/w_451,h_451,fp_0.49_0.25,q_90/6bc4fd_289a758675ee49f38674f13a67d14bd7~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_289a758675ee49f38674f13a67d14bd7~mv2.jpg/v1/fit/w_795,h_1043,q_90/6bc4fd_289a758675ee49f38674f13a67d14bd7~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_73d97caff4a54cc39e699990aca3ef48~mv2.jpg/v1/fill/w_458,h_458,fp_0.33_0.39,q_90/6bc4fd_73d97caff4a54cc39e699990aca3ef48~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_73d97caff4a54cc39e699990aca3ef48~mv2.jpg/v1/fit/w_795,h_1043,q_90/6bc4fd_73d97caff4a54cc39e699990aca3ef48~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_eadaf1d59fc3485fbf9f9dc570984c10~mv2.jpg/v1/fill/w_451,h_451,fp_0.5_0.28,q_90/6bc4fd_eadaf1d59fc3485fbf9f9dc570984c10~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_eadaf1d59fc3485fbf9f9dc570984c10~mv2.jpg/v1/fit/w_795,h_1043,q_90/6bc4fd_eadaf1d59fc3485fbf9f9dc570984c10~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_7ffc5bb1ae78401b9b11031c03846f1f~mv2.jpg/v1/fill/w_451,h_451,q_90/6bc4fd_7ffc5bb1ae78401b9b11031c03846f1f~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_7ffc5bb1ae78401b9b11031c03846f1f~mv2.jpg/v1/fit/w_795,h_1043,q_90/6bc4fd_7ffc5bb1ae78401b9b11031c03846f1f~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_9310d4fd86cc4a50bb3903b36e056087~mv2.jpg/v1/fill/w_451,h_451,fp_0.47_0.4,q_90/6bc4fd_9310d4fd86cc4a50bb3903b36e056087~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_9310d4fd86cc4a50bb3903b36e056087~mv2.jpg/v1/fit/w_795,h_1043,q_90/6bc4fd_9310d4fd86cc4a50bb3903b36e056087~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_6ba7d2621fe3470b86220a9af14552b6~mv2.jpg/v1/fill/w_451,h_451,fp_0.51_0.25,q_90/6bc4fd_6ba7d2621fe3470b86220a9af14552b6~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_6ba7d2621fe3470b86220a9af14552b6~mv2.jpg/v1/fit/w_795,h_1043,q_90/6bc4fd_6ba7d2621fe3470b86220a9af14552b6~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_31bf68c28a5a43529f705eef31207aea~mv2.jpg/v1/fill/w_451,h_451,q_90/6bc4fd_31bf68c28a5a43529f705eef31207aea~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_31bf68c28a5a43529f705eef31207aea~mv2.jpg/v1/fit/w_795,h_1043,q_90/6bc4fd_31bf68c28a5a43529f705eef31207aea~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_921381b821b2440b9f2e9a317a772f2e~mv2.jpg/v1/fill/w_451,h_451,fp_0.31_0.26,q_90/6bc4fd_921381b821b2440b9f2e9a317a772f2e~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_921381b821b2440b9f2e9a317a772f2e~mv2.jpg/v1/fit/w_795,h_1043,q_90/6bc4fd_921381b821b2440b9f2e9a317a772f2e~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_144edc925ae94f1a90c6c88fade8b1c1~mv2.jpg/v1/fill/w_451,h_451,fp_0.5_0.27,q_90/6bc4fd_144edc925ae94f1a90c6c88fade8b1c1~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_144edc925ae94f1a90c6c88fade8b1c1~mv2.jpg/v1/fit/w_795,h_1043,q_90/6bc4fd_144edc925ae94f1a90c6c88fade8b1c1~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_9deba1564e8146b383b64b59418e8ebb~mv2.jpg/v1/fill/w_451,h_451,fp_0.61_0.38,q_90/6bc4fd_9deba1564e8146b383b64b59418e8ebb~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_9deba1564e8146b383b64b59418e8ebb~mv2.jpg/v1/fit/w_795,h_1043,q_90/6bc4fd_9deba1564e8146b383b64b59418e8ebb~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_b6013fba697b450a8df0d377255e30f4~mv2.jpg/v1/fill/w_451,h_451,q_90/6bc4fd_b6013fba697b450a8df0d377255e30f4~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_b6013fba697b450a8df0d377255e30f4~mv2.jpg/v1/fit/w_795,h_1043,q_90/6bc4fd_b6013fba697b450a8df0d377255e30f4~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_d6b44cb00aeb43aaaedf02684ee4dbc5~mv2.jpg/v1/fill/w_458,h_458,q_90/6bc4fd_d6b44cb00aeb43aaaedf02684ee4dbc5~mv2.webp',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_d6b44cb00aeb43aaaedf02684ee4dbc5~mv2.jpg/v1/fit/w_795,h_1043,q_90/6bc4fd_d6b44cb00aeb43aaaedf02684ee4dbc5~mv2.jpg',
      },
    ],
  },
];

const videos: Video[] = [
  {
    id: '1',
    url_video: 'https://www.youtube.com/embed/Kj_t4mWOEcI?si=Br9bQWVwZ9kUj5Hu',
    tipo: 'externo',
    url_miniatura:
      'https://1221studio.es/wp-content/uploads/2023/08/CAELE-MOSBY-1024x460.jpg',
  },
  {
    id: '2',
    url_video:
      'https://video.wixstatic.com/video/6bc4fd_6e693797c28642689f61bab9ff5ee291/1080p/mp4/file.mp4',
    tipo: 'interno',
    url_miniatura: 'img/video-2.png',
  },

  {
    id: '3',
    url_video:
      'https://video.wixstatic.com/video/6bc4fd_b73e6695461147618e1388cd9b38575c/1080p/mp4/file.mp4',
    tipo: 'interno',
    url_miniatura: 'img/video-3.png',
  },
  {
    id: '4',
    url_video:
      'https://video.wixstatic.com/video/6bc4fd_c82c9752c7b849c68a132b443b628e4d/1080p/mp4/file.mp4',
    tipo: 'interno',
    url_miniatura: 'img/video-4.png',
  },
  {
    id: '5',
    url_video:
      'https://video.wixstatic.com/video/6bc4fd_a8070b3bfee749bf8e7d63295ee703ab/1080p/mp4/file.mp4',
    tipo: 'interno',
    url_miniatura: 'img/video-5.png',
  },
];

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'ROB | FOTÓGRAFO & FILMMAKER',
  },
  {
    path: 'fotos',
    component: FotosComponent,
    title: 'FOTOGRAFÍA | ROB PROFILE',
    data: { fotosCategorias: fotosCategorias },
  },
  {
    path: 'fotos/' + fotosCategorias[0].id,
    component: FotosCategoriaComponent,
    title: `FOTOS ${fotosCategorias[0].titulo.toUpperCase()} | ROB PROFILE`,
    data: { fotoCategoria: fotosCategorias[0] },
  },
  {
    path: 'fotos/' + fotosCategorias[1].id,
    component: FotosCategoriaComponent,
    title: `FOTOS ${fotosCategorias[1].titulo.toUpperCase()} | ROB PROFILE`,
    data: { fotoCategoria: fotosCategorias[1] },
  },
  {
    path: 'fotos/' + fotosCategorias[2].id,
    component: FotosCategoriaComponent,
    title: `FOTOS ${fotosCategorias[2].titulo.toUpperCase()} | ROB PROFILE`,
    data: { fotoCategoria: fotosCategorias[2] },
  },
  {
    path: 'fotos/' + fotosCategorias[3].id,
    component: FotosCategoriaComponent,
    title: `FOTOS ${fotosCategorias[3].titulo.toUpperCase()} | ROB PROFILE`,
    data: { fotoCategoria: fotosCategorias[3] },
  },
  {
    path: 'fotos/' + fotosCategorias[4].id,
    component: FotosCategoriaComponent,
    title: `FOTOS ${fotosCategorias[4].titulo.toUpperCase()} | ROB PROFILE`,
    data: { fotoCategoria: fotosCategorias[4] },
  },
  {
    path: 'videos',
    component: VideosComponent,
    title: 'VÍDEOS | ROB PROFILE',
    data: { videos: videos },
  },
  {
    path: 'sobre-mi',
    component: SobreMiComponent,
    title: 'SOBRE MÍ | ROB PROFILE',
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    title: 'CONTACTO | ROB PROFILE',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
