import { Routes } from '@angular/router';
import { FotosComponent } from './fotos/fotos.component';
import { VideosComponent } from './videos/videos.component';
import { FotosCategoriaComponent } from './fotos-categoria/fotos-categoria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { Foto } from './interfaces/foto';
import { FotoCategoria } from './interfaces/foto-categoria';
import { Video } from './interfaces/video';

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
          'https://static.wixstatic.com/media/6bc4fd_2bf39450116942148e3163ad580c266a~mv2.jpg/v1/fill/w_532,h_532,q_90/6bc4fd_2bf39450116942148e3163ad580c266a~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg/v1/fill/w_385,h_385,q_90/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg/v1/fill/w_385,h_385,q_90/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg/v1/fill/w_386,h_385,fp_0.39_0.35,q_90/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg/v1/fill/w_386,h_385,fp_0.39_0.35,q_90/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg/v1/fill/w_353,h_352,fp_0.49_0.44,q_90/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg/v1/fill/w_353,h_352,fp_0.49_0.44,q_90/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg/v1/fill/w_384,h_384,q_90/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg/v1/fill/w_384,h_384,q_90/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg/v1/fill/w_385,h_384,fp_0.62_0.57,q_90/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg/v1/fill/w_385,h_384,fp_0.62_0.57,q_90/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg/v1/fill/w_385,h_384,q_90/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg/v1/fill/w_385,h_384,q_90/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg/v1/fill/w_428,h_428,q_90/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg/v1/fill/w_428,h_428,q_90/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg/v1/fill/w_429,h_428,fp_0.35_0.57,q_90/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg/v1/fill/w_429,h_428,fp_0.35_0.57,q_90/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg/v1/fill/w_429,h_428,q_90/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg/v1/fill/w_429,h_428,q_90/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_ebf252faa7a04ce0b84b3b7019d53dc0~mv2.jpg/v1/fill/w_428,h_428,q_90/6bc4fd_ebf252faa7a04ce0b84b3b7019d53dc0~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_ebf252faa7a04ce0b84b3b7019d53dc0~mv2.jpg/v1/fill/w_428,h_428,q_90/6bc4fd_ebf252faa7a04ce0b84b3b7019d53dc0~mv2.jpg',
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
          'https://static.wixstatic.com/media/6bc4fd_4c8ef18d9ee648af84f94c781f2b0028~mv2.jpg/v1/fill/w_532,h_532,fp_0.47_0.34,q_90/6bc4fd_4c8ef18d9ee648af84f94c781f2b0028~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_4c8ef18d9ee648af84f94c781f2b0028~mv2.jpg/v1/fill/w_532,h_532,fp_0.47_0.34,q_90/6bc4fd_4c8ef18d9ee648af84f94c781f2b0028~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_cb96b7d359d642ad922b4d07ed7521c2~mv2.jpg/v1/fill/w_385,h_385,fp_0.48_0.32,q_90/6bc4fd_cb96b7d359d642ad922b4d07ed7521c2~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_cb96b7d359d642ad922b4d07ed7521c2~mv2.jpg/v1/fill/w_385,h_385,fp_0.48_0.32,q_90/6bc4fd_cb96b7d359d642ad922b4d07ed7521c2~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_f862d994216d47dcbf1c166acd5bd648~mv2.jpg/v1/fill/w_393,h_393,q_90/6bc4fd_f862d994216d47dcbf1c166acd5bd648~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f862d994216d47dcbf1c166acd5bd648~mv2.jpg/v1/fill/w_393,h_393,q_90/6bc4fd_f862d994216d47dcbf1c166acd5bd648~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_207358f7154145ec91e0dfad0a745341~mv2.jpg/v1/fill/w_385,h_385,fp_0.47_0.26,q_90/6bc4fd_207358f7154145ec91e0dfad0a745341~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_207358f7154145ec91e0dfad0a745341~mv2.jpg/v1/fill/w_385,h_385,fp_0.47_0.26,q_90/6bc4fd_207358f7154145ec91e0dfad0a745341~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_9dc29b9be17345e682628b1b9ceec337~mv2.jpg/v1/fill/w_385,h_385,fp_0.27_0.55,q_90/6bc4fd_9dc29b9be17345e682628b1b9ceec337~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_9dc29b9be17345e682628b1b9ceec337~mv2.jpg/v1/fill/w_385,h_385,fp_0.27_0.55,q_90/6bc4fd_9dc29b9be17345e682628b1b9ceec337~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_cbe5b6a47de64fadad164c44aacf396d~mv2.jpg/v1/fill/w_320,h_320,fp_0.52_0.27,q_90/6bc4fd_cbe5b6a47de64fadad164c44aacf396d~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_cbe5b6a47de64fadad164c44aacf396d~mv2.jpg/v1/fill/w_320,h_320,fp_0.52_0.27,q_90/6bc4fd_cbe5b6a47de64fadad164c44aacf396d~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_aa046e41369c40e3b5d1d411fae63175~mv2.jpg/v1/fill/w_320,h_320,fp_0.51_0.27,q_90/6bc4fd_aa046e41369c40e3b5d1d411fae63175~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_aa046e41369c40e3b5d1d411fae63175~mv2.jpg/v1/fill/w_320,h_320,fp_0.51_0.27,q_90/6bc4fd_aa046e41369c40e3b5d1d411fae63175~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_0fddc44318f24a99878a3a681acb21f4~mv2.jpg/v1/fill/w_320,h_320,fp_0.6_0.5,q_90/6bc4fd_0fddc44318f24a99878a3a681acb21f4~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_0fddc44318f24a99878a3a681acb21f4~mv2.jpg/v1/fill/w_320,h_320,fp_0.6_0.5,q_90/6bc4fd_0fddc44318f24a99878a3a681acb21f4~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_a23936e50d8e47dabb345cf197696b04~mv2.jpg/v1/fill/w_320,h_320,fp_0.44_0.35,q_90/6bc4fd_a23936e50d8e47dabb345cf197696b04~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_a23936e50d8e47dabb345cf197696b04~mv2.jpg/v1/fill/w_320,h_320,fp_0.44_0.35,q_90/6bc4fd_a23936e50d8e47dabb345cf197696b04~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_fd61fb0f72f34866a2a80a2cdbc630a4~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_fd61fb0f72f34866a2a80a2cdbc630a4~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_fd61fb0f72f34866a2a80a2cdbc630a4~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_fd61fb0f72f34866a2a80a2cdbc630a4~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_98801b093eea40eb89efd8dd456d7bb4~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_98801b093eea40eb89efd8dd456d7bb4~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_98801b093eea40eb89efd8dd456d7bb4~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_98801b093eea40eb89efd8dd456d7bb4~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_8de9798b6ef04a6793178db9517560bf~mv2.jpg/v1/fill/w_328,h_328,fp_0.56_0.33,q_90/6bc4fd_8de9798b6ef04a6793178db9517560bf~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_8de9798b6ef04a6793178db9517560bf~mv2.jpg/v1/fill/w_328,h_328,fp_0.56_0.33,q_90/6bc4fd_8de9798b6ef04a6793178db9517560bf~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_9304a3f07fd446a5ba1d1e4b059e0681~mv2.jpg/v1/fill/w_328,h_328,q_90/6bc4fd_9304a3f07fd446a5ba1d1e4b059e0681~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_9304a3f07fd446a5ba1d1e4b059e0681~mv2.jpg/v1/fill/w_328,h_328,q_90/6bc4fd_9304a3f07fd446a5ba1d1e4b059e0681~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_deb4c74d040043f19ab346e342d44fb7~mv2.jpg/v1/fill/w_329,h_328,fp_0.5_0.29,q_90/6bc4fd_deb4c74d040043f19ab346e342d44fb7~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_deb4c74d040043f19ab346e342d44fb7~mv2.jpg/v1/fill/w_329,h_328,fp_0.5_0.29,q_90/6bc4fd_deb4c74d040043f19ab346e342d44fb7~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_f26dca9bc8f0482698c809c1cc78fe31~mv2.jpg/v1/fill/w_327,h_327,q_90/6bc4fd_f26dca9bc8f0482698c809c1cc78fe31~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f26dca9bc8f0482698c809c1cc78fe31~mv2.jpg/v1/fill/w_327,h_327,q_90/6bc4fd_f26dca9bc8f0482698c809c1cc78fe31~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_45b9a301b53f4353970d66547009f421~mv2.jpg/v1/fill/w_328,h_328,fp_0.43_0.4,q_90/6bc4fd_45b9a301b53f4353970d66547009f421~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_45b9a301b53f4353970d66547009f421~mv2.jpg/v1/fill/w_328,h_328,fp_0.43_0.4,q_90/6bc4fd_45b9a301b53f4353970d66547009f421~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_01726f413be241ca8931c8a3d84c94fa~mv2.jpg/v1/fill/w_328,h_327,fp_0.54_0.42,q_90/6bc4fd_01726f413be241ca8931c8a3d84c94fa~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_01726f413be241ca8931c8a3d84c94fa~mv2.jpg/v1/fill/w_328,h_327,fp_0.54_0.42,q_90/6bc4fd_01726f413be241ca8931c8a3d84c94fa~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_857f8ef3774a4a15b7dbec2ec5c92ea3~mv2.jpg/v1/fill/w_393,h_393,fp_0.52_0.38,q_90/6bc4fd_857f8ef3774a4a15b7dbec2ec5c92ea3~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_857f8ef3774a4a15b7dbec2ec5c92ea3~mv2.jpg/v1/fill/w_393,h_393,fp_0.52_0.38,q_90/6bc4fd_857f8ef3774a4a15b7dbec2ec5c92ea3~mv2.jpg',
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
          'https://static.wixstatic.com/media/6bc4fd_4c8ef18d9ee648af84f94c781f2b0028~mv2.jpg/v1/fill/w_532,h_532,fp_0.47_0.34,q_90/6bc4fd_4c8ef18d9ee648af84f94c781f2b0028~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_4c8ef18d9ee648af84f94c781f2b0028~mv2.jpg/v1/fill/w_532,h_532,fp_0.47_0.34,q_90/6bc4fd_4c8ef18d9ee648af84f94c781f2b0028~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_cb96b7d359d642ad922b4d07ed7521c2~mv2.jpg/v1/fill/w_385,h_385,fp_0.48_0.32,q_90/6bc4fd_cb96b7d359d642ad922b4d07ed7521c2~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_cb96b7d359d642ad922b4d07ed7521c2~mv2.jpg/v1/fill/w_385,h_385,fp_0.48_0.32,q_90/6bc4fd_cb96b7d359d642ad922b4d07ed7521c2~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_f862d994216d47dcbf1c166acd5bd648~mv2.jpg/v1/fill/w_393,h_393,q_90/6bc4fd_f862d994216d47dcbf1c166acd5bd648~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f862d994216d47dcbf1c166acd5bd648~mv2.jpg/v1/fill/w_393,h_393,q_90/6bc4fd_f862d994216d47dcbf1c166acd5bd648~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_207358f7154145ec91e0dfad0a745341~mv2.jpg/v1/fill/w_385,h_385,fp_0.47_0.26,q_90/6bc4fd_207358f7154145ec91e0dfad0a745341~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_207358f7154145ec91e0dfad0a745341~mv2.jpg/v1/fill/w_385,h_385,fp_0.47_0.26,q_90/6bc4fd_207358f7154145ec91e0dfad0a745341~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_9dc29b9be17345e682628b1b9ceec337~mv2.jpg/v1/fill/w_385,h_385,fp_0.27_0.55,q_90/6bc4fd_9dc29b9be17345e682628b1b9ceec337~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_9dc29b9be17345e682628b1b9ceec337~mv2.jpg/v1/fill/w_385,h_385,fp_0.27_0.55,q_90/6bc4fd_9dc29b9be17345e682628b1b9ceec337~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_cbe5b6a47de64fadad164c44aacf396d~mv2.jpg/v1/fill/w_320,h_320,fp_0.52_0.27,q_90/6bc4fd_cbe5b6a47de64fadad164c44aacf396d~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_cbe5b6a47de64fadad164c44aacf396d~mv2.jpg/v1/fill/w_320,h_320,fp_0.52_0.27,q_90/6bc4fd_cbe5b6a47de64fadad164c44aacf396d~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_aa046e41369c40e3b5d1d411fae63175~mv2.jpg/v1/fill/w_320,h_320,fp_0.51_0.27,q_90/6bc4fd_aa046e41369c40e3b5d1d411fae63175~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_aa046e41369c40e3b5d1d411fae63175~mv2.jpg/v1/fill/w_320,h_320,fp_0.51_0.27,q_90/6bc4fd_aa046e41369c40e3b5d1d411fae63175~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_0fddc44318f24a99878a3a681acb21f4~mv2.jpg/v1/fill/w_320,h_320,fp_0.6_0.5,q_90/6bc4fd_0fddc44318f24a99878a3a681acb21f4~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_0fddc44318f24a99878a3a681acb21f4~mv2.jpg/v1/fill/w_320,h_320,fp_0.6_0.5,q_90/6bc4fd_0fddc44318f24a99878a3a681acb21f4~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_a23936e50d8e47dabb345cf197696b04~mv2.jpg/v1/fill/w_320,h_320,fp_0.44_0.35,q_90/6bc4fd_a23936e50d8e47dabb345cf197696b04~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_a23936e50d8e47dabb345cf197696b04~mv2.jpg/v1/fill/w_320,h_320,fp_0.44_0.35,q_90/6bc4fd_a23936e50d8e47dabb345cf197696b04~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_fd61fb0f72f34866a2a80a2cdbc630a4~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_fd61fb0f72f34866a2a80a2cdbc630a4~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_fd61fb0f72f34866a2a80a2cdbc630a4~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_fd61fb0f72f34866a2a80a2cdbc630a4~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_98801b093eea40eb89efd8dd456d7bb4~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_98801b093eea40eb89efd8dd456d7bb4~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_98801b093eea40eb89efd8dd456d7bb4~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_98801b093eea40eb89efd8dd456d7bb4~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_8de9798b6ef04a6793178db9517560bf~mv2.jpg/v1/fill/w_328,h_328,fp_0.56_0.33,q_90/6bc4fd_8de9798b6ef04a6793178db9517560bf~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_8de9798b6ef04a6793178db9517560bf~mv2.jpg/v1/fill/w_328,h_328,fp_0.56_0.33,q_90/6bc4fd_8de9798b6ef04a6793178db9517560bf~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_9304a3f07fd446a5ba1d1e4b059e0681~mv2.jpg/v1/fill/w_328,h_328,q_90/6bc4fd_9304a3f07fd446a5ba1d1e4b059e0681~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_9304a3f07fd446a5ba1d1e4b059e0681~mv2.jpg/v1/fill/w_328,h_328,q_90/6bc4fd_9304a3f07fd446a5ba1d1e4b059e0681~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_deb4c74d040043f19ab346e342d44fb7~mv2.jpg/v1/fill/w_329,h_328,fp_0.5_0.29,q_90/6bc4fd_deb4c74d040043f19ab346e342d44fb7~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_deb4c74d040043f19ab346e342d44fb7~mv2.jpg/v1/fill/w_329,h_328,fp_0.5_0.29,q_90/6bc4fd_deb4c74d040043f19ab346e342d44fb7~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_f26dca9bc8f0482698c809c1cc78fe31~mv2.jpg/v1/fill/w_327,h_327,q_90/6bc4fd_f26dca9bc8f0482698c809c1cc78fe31~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f26dca9bc8f0482698c809c1cc78fe31~mv2.jpg/v1/fill/w_327,h_327,q_90/6bc4fd_f26dca9bc8f0482698c809c1cc78fe31~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_45b9a301b53f4353970d66547009f421~mv2.jpg/v1/fill/w_328,h_328,fp_0.43_0.4,q_90/6bc4fd_45b9a301b53f4353970d66547009f421~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_45b9a301b53f4353970d66547009f421~mv2.jpg/v1/fill/w_328,h_328,fp_0.43_0.4,q_90/6bc4fd_45b9a301b53f4353970d66547009f421~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_01726f413be241ca8931c8a3d84c94fa~mv2.jpg/v1/fill/w_328,h_327,fp_0.54_0.42,q_90/6bc4fd_01726f413be241ca8931c8a3d84c94fa~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_01726f413be241ca8931c8a3d84c94fa~mv2.jpg/v1/fill/w_328,h_327,fp_0.54_0.42,q_90/6bc4fd_01726f413be241ca8931c8a3d84c94fa~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_857f8ef3774a4a15b7dbec2ec5c92ea3~mv2.jpg/v1/fill/w_393,h_393,fp_0.52_0.38,q_90/6bc4fd_857f8ef3774a4a15b7dbec2ec5c92ea3~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_857f8ef3774a4a15b7dbec2ec5c92ea3~mv2.jpg/v1/fill/w_393,h_393,fp_0.52_0.38,q_90/6bc4fd_857f8ef3774a4a15b7dbec2ec5c92ea3~mv2.jpg',
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
          'https://static.wixstatic.com/media/6bc4fd_4c8ef18d9ee648af84f94c781f2b0028~mv2.jpg/v1/fill/w_532,h_532,fp_0.47_0.34,q_90/6bc4fd_4c8ef18d9ee648af84f94c781f2b0028~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_4c8ef18d9ee648af84f94c781f2b0028~mv2.jpg/v1/fill/w_532,h_532,fp_0.47_0.34,q_90/6bc4fd_4c8ef18d9ee648af84f94c781f2b0028~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_cb96b7d359d642ad922b4d07ed7521c2~mv2.jpg/v1/fill/w_385,h_385,fp_0.48_0.32,q_90/6bc4fd_cb96b7d359d642ad922b4d07ed7521c2~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_cb96b7d359d642ad922b4d07ed7521c2~mv2.jpg/v1/fill/w_385,h_385,fp_0.48_0.32,q_90/6bc4fd_cb96b7d359d642ad922b4d07ed7521c2~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_f862d994216d47dcbf1c166acd5bd648~mv2.jpg/v1/fill/w_393,h_393,q_90/6bc4fd_f862d994216d47dcbf1c166acd5bd648~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f862d994216d47dcbf1c166acd5bd648~mv2.jpg/v1/fill/w_393,h_393,q_90/6bc4fd_f862d994216d47dcbf1c166acd5bd648~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_207358f7154145ec91e0dfad0a745341~mv2.jpg/v1/fill/w_385,h_385,fp_0.47_0.26,q_90/6bc4fd_207358f7154145ec91e0dfad0a745341~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_207358f7154145ec91e0dfad0a745341~mv2.jpg/v1/fill/w_385,h_385,fp_0.47_0.26,q_90/6bc4fd_207358f7154145ec91e0dfad0a745341~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_9dc29b9be17345e682628b1b9ceec337~mv2.jpg/v1/fill/w_385,h_385,fp_0.27_0.55,q_90/6bc4fd_9dc29b9be17345e682628b1b9ceec337~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_9dc29b9be17345e682628b1b9ceec337~mv2.jpg/v1/fill/w_385,h_385,fp_0.27_0.55,q_90/6bc4fd_9dc29b9be17345e682628b1b9ceec337~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_cbe5b6a47de64fadad164c44aacf396d~mv2.jpg/v1/fill/w_320,h_320,fp_0.52_0.27,q_90/6bc4fd_cbe5b6a47de64fadad164c44aacf396d~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_cbe5b6a47de64fadad164c44aacf396d~mv2.jpg/v1/fill/w_320,h_320,fp_0.52_0.27,q_90/6bc4fd_cbe5b6a47de64fadad164c44aacf396d~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_aa046e41369c40e3b5d1d411fae63175~mv2.jpg/v1/fill/w_320,h_320,fp_0.51_0.27,q_90/6bc4fd_aa046e41369c40e3b5d1d411fae63175~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_aa046e41369c40e3b5d1d411fae63175~mv2.jpg/v1/fill/w_320,h_320,fp_0.51_0.27,q_90/6bc4fd_aa046e41369c40e3b5d1d411fae63175~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_0fddc44318f24a99878a3a681acb21f4~mv2.jpg/v1/fill/w_320,h_320,fp_0.6_0.5,q_90/6bc4fd_0fddc44318f24a99878a3a681acb21f4~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_0fddc44318f24a99878a3a681acb21f4~mv2.jpg/v1/fill/w_320,h_320,fp_0.6_0.5,q_90/6bc4fd_0fddc44318f24a99878a3a681acb21f4~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_a23936e50d8e47dabb345cf197696b04~mv2.jpg/v1/fill/w_320,h_320,fp_0.44_0.35,q_90/6bc4fd_a23936e50d8e47dabb345cf197696b04~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_a23936e50d8e47dabb345cf197696b04~mv2.jpg/v1/fill/w_320,h_320,fp_0.44_0.35,q_90/6bc4fd_a23936e50d8e47dabb345cf197696b04~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_fd61fb0f72f34866a2a80a2cdbc630a4~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_fd61fb0f72f34866a2a80a2cdbc630a4~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_fd61fb0f72f34866a2a80a2cdbc630a4~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_fd61fb0f72f34866a2a80a2cdbc630a4~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_98801b093eea40eb89efd8dd456d7bb4~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_98801b093eea40eb89efd8dd456d7bb4~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_98801b093eea40eb89efd8dd456d7bb4~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_98801b093eea40eb89efd8dd456d7bb4~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_8de9798b6ef04a6793178db9517560bf~mv2.jpg/v1/fill/w_328,h_328,fp_0.56_0.33,q_90/6bc4fd_8de9798b6ef04a6793178db9517560bf~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_8de9798b6ef04a6793178db9517560bf~mv2.jpg/v1/fill/w_328,h_328,fp_0.56_0.33,q_90/6bc4fd_8de9798b6ef04a6793178db9517560bf~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_9304a3f07fd446a5ba1d1e4b059e0681~mv2.jpg/v1/fill/w_328,h_328,q_90/6bc4fd_9304a3f07fd446a5ba1d1e4b059e0681~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_9304a3f07fd446a5ba1d1e4b059e0681~mv2.jpg/v1/fill/w_328,h_328,q_90/6bc4fd_9304a3f07fd446a5ba1d1e4b059e0681~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_deb4c74d040043f19ab346e342d44fb7~mv2.jpg/v1/fill/w_329,h_328,fp_0.5_0.29,q_90/6bc4fd_deb4c74d040043f19ab346e342d44fb7~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_deb4c74d040043f19ab346e342d44fb7~mv2.jpg/v1/fill/w_329,h_328,fp_0.5_0.29,q_90/6bc4fd_deb4c74d040043f19ab346e342d44fb7~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_f26dca9bc8f0482698c809c1cc78fe31~mv2.jpg/v1/fill/w_327,h_327,q_90/6bc4fd_f26dca9bc8f0482698c809c1cc78fe31~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f26dca9bc8f0482698c809c1cc78fe31~mv2.jpg/v1/fill/w_327,h_327,q_90/6bc4fd_f26dca9bc8f0482698c809c1cc78fe31~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_45b9a301b53f4353970d66547009f421~mv2.jpg/v1/fill/w_328,h_328,fp_0.43_0.4,q_90/6bc4fd_45b9a301b53f4353970d66547009f421~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_45b9a301b53f4353970d66547009f421~mv2.jpg/v1/fill/w_328,h_328,fp_0.43_0.4,q_90/6bc4fd_45b9a301b53f4353970d66547009f421~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_01726f413be241ca8931c8a3d84c94fa~mv2.jpg/v1/fill/w_328,h_327,fp_0.54_0.42,q_90/6bc4fd_01726f413be241ca8931c8a3d84c94fa~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_01726f413be241ca8931c8a3d84c94fa~mv2.jpg/v1/fill/w_328,h_327,fp_0.54_0.42,q_90/6bc4fd_01726f413be241ca8931c8a3d84c94fa~mv2.jpg',
      },
      {
        url_imagen_miniatura:
          'https://static.wixstatic.com/media/6bc4fd_857f8ef3774a4a15b7dbec2ec5c92ea3~mv2.jpg/v1/fill/w_393,h_393,fp_0.52_0.38,q_90/6bc4fd_857f8ef3774a4a15b7dbec2ec5c92ea3~mv2.jpg',
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_857f8ef3774a4a15b7dbec2ec5c92ea3~mv2.jpg/v1/fill/w_393,h_393,fp_0.52_0.38,q_90/6bc4fd_857f8ef3774a4a15b7dbec2ec5c92ea3~mv2.jpg',
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
    path: 'fotos',
    component: FotosComponent,
    title: 'Fotografía | ROB',
    data: { fotosCategorias: fotosCategorias },
  },
  {
    path: 'fotos/' + fotosCategorias[0].id,
    component: FotosCategoriaComponent,
    title: `Fotos ${fotosCategorias[0].titulo} | ROB`,
    data: { fotoCategoria: fotosCategorias[0] },
  },
  {
    path: 'fotos/' + fotosCategorias[1].id,
    component: FotosCategoriaComponent,
    title: `Fotos ${fotosCategorias[1].titulo} | ROB`,
    data: { fotoCategoria: fotosCategorias[1] },
  },
  {
    path: 'fotos/' + fotosCategorias[2].id,
    component: FotosCategoriaComponent,
    title: `Fotos ${fotosCategorias[2].titulo} | ROB`,
    data: { fotoCategoria: fotosCategorias[2] },
  },
  {
    path: 'fotos/' + fotosCategorias[3].id,
    component: FotosCategoriaComponent,
    title: `Fotos ${fotosCategorias[3].titulo} | ROB`,
    data: { fotoCategoria: fotosCategorias[3] },
  },
  {
    path: 'fotos/' + fotosCategorias[4].id,
    component: FotosCategoriaComponent,
    title: `Fotos ${fotosCategorias[4].titulo} | ROB`,
    data: { fotoCategoria: fotosCategorias[4] },
  },
  {
    path: 'videos',
    component: VideosComponent,
    title: 'Videos | ROB',
    data: { videos: videos },
  },
  {
    path: 'sobre-mi',
    component: HomeComponent,
    title: 'Sobre mí | ROB',
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    title: 'Contacto | ROB',
  },
  {
    path: '**',
    redirectTo: 'fotos',
    pathMatch: 'full',
  },
];
