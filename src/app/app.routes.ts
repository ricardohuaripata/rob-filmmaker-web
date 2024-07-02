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
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_2bf39450116942148e3163ad580c266a~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_2bf39450116942148e3163ad580c266a~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg/v1/fill/w_385,h_385,q_90/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg/v1/fill/w_386,h_385,fp_0.39_0.35,q_90/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg/v1/fill/w_353,h_352,fp_0.49_0.44,q_90/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg/v1/fill/w_384,h_384,q_90/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg/v1/fill/w_385,h_384,fp_0.62_0.57,q_90/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg/v1/fill/w_385,h_384,q_90/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg/v1/fill/w_428,h_428,q_90/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg/v1/fill/w_429,h_428,fp_0.35_0.57,q_90/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg/v1/fill/w_429,h_428,q_90/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg',
      },
      {
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
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_2bf39450116942148e3163ad580c266a~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_2bf39450116942148e3163ad580c266a~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg/v1/fill/w_385,h_385,q_90/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg/v1/fill/w_386,h_385,fp_0.39_0.35,q_90/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg/v1/fill/w_353,h_352,fp_0.49_0.44,q_90/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg/v1/fill/w_384,h_384,q_90/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg/v1/fill/w_385,h_384,fp_0.62_0.57,q_90/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg/v1/fill/w_385,h_384,q_90/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg/v1/fill/w_428,h_428,q_90/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg/v1/fill/w_429,h_428,fp_0.35_0.57,q_90/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg/v1/fill/w_429,h_428,q_90/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_ebf252faa7a04ce0b84b3b7019d53dc0~mv2.jpg/v1/fill/w_428,h_428,q_90/6bc4fd_ebf252faa7a04ce0b84b3b7019d53dc0~mv2.jpg',
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
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_2bf39450116942148e3163ad580c266a~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_2bf39450116942148e3163ad580c266a~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg/v1/fill/w_385,h_385,q_90/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg/v1/fill/w_386,h_385,fp_0.39_0.35,q_90/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg/v1/fill/w_353,h_352,fp_0.49_0.44,q_90/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg/v1/fill/w_384,h_384,q_90/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg/v1/fill/w_385,h_384,fp_0.62_0.57,q_90/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg/v1/fill/w_385,h_384,q_90/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg/v1/fill/w_428,h_428,q_90/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg/v1/fill/w_429,h_428,fp_0.35_0.57,q_90/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg/v1/fill/w_429,h_428,q_90/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_ebf252faa7a04ce0b84b3b7019d53dc0~mv2.jpg/v1/fill/w_428,h_428,q_90/6bc4fd_ebf252faa7a04ce0b84b3b7019d53dc0~mv2.jpg',
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
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_2bf39450116942148e3163ad580c266a~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_2bf39450116942148e3163ad580c266a~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg/v1/fill/w_385,h_385,q_90/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg/v1/fill/w_386,h_385,fp_0.39_0.35,q_90/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg/v1/fill/w_353,h_352,fp_0.49_0.44,q_90/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg/v1/fill/w_384,h_384,q_90/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg/v1/fill/w_385,h_384,fp_0.62_0.57,q_90/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg/v1/fill/w_385,h_384,q_90/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg/v1/fill/w_428,h_428,q_90/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg/v1/fill/w_429,h_428,fp_0.35_0.57,q_90/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg/v1/fill/w_429,h_428,q_90/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_ebf252faa7a04ce0b84b3b7019d53dc0~mv2.jpg/v1/fill/w_428,h_428,q_90/6bc4fd_ebf252faa7a04ce0b84b3b7019d53dc0~mv2.jpg',
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
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_2bf39450116942148e3163ad580c266a~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_2bf39450116942148e3163ad580c266a~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg/v1/fill/w_320,h_320,q_90/6bc4fd_892154b5f8dd4b69ab32fe6302ba9647~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg/v1/fill/w_385,h_385,q_90/6bc4fd_f50d93afd4c54d8cad3ce904f01e18b8~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg/v1/fill/w_386,h_385,fp_0.39_0.35,q_90/6bc4fd_0b44ad5562194b699483fa676246471c~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg/v1/fill/w_353,h_352,fp_0.49_0.44,q_90/6bc4fd_ed9b9aff1ea5497595159e5efd283d5d~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg/v1/fill/w_384,h_384,q_90/6bc4fd_26ee5752d2504ce686ed1a93fe31d064~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg/v1/fill/w_385,h_384,fp_0.62_0.57,q_90/6bc4fd_4073bdb4bded4d7ba5f4e38a06c58d2a~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg/v1/fill/w_385,h_384,q_90/6bc4fd_08ebee56bcb74a6aaa09786df0646d1c~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg/v1/fill/w_428,h_428,q_90/6bc4fd_8f2355e3a80c467480a8e302ad3e4491~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg/v1/fill/w_429,h_428,fp_0.35_0.57,q_90/6bc4fd_3a31eaf91c834eb4b3ef9f848478cbb5~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg/v1/fill/w_429,h_428,q_90/6bc4fd_6c485b5392e14fbb806e44a8f63496cc~mv2.jpg',
      },
      {
        url_imagen:
          'https://static.wixstatic.com/media/6bc4fd_ebf252faa7a04ce0b84b3b7019d53dc0~mv2.jpg/v1/fill/w_428,h_428,q_90/6bc4fd_ebf252faa7a04ce0b84b3b7019d53dc0~mv2.jpg',
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
    url_miniatura:
      'https://1221studio.es/wp-content/uploads/2023/08/CAELE-MOSBY-1024x460.jpg',
  },

  {
    id: '3',
    url_video:
      'https://video.wixstatic.com/video/6bc4fd_b73e6695461147618e1388cd9b38575c/1080p/mp4/file.mp4',
    tipo: 'interno',
    url_miniatura:
      'https://1221studio.es/wp-content/uploads/2023/08/CAELE-MOSBY-1024x460.jpg',
  },
  {
    id: '4',
    url_video:
      'https://video.wixstatic.com/video/6bc4fd_c82c9752c7b849c68a132b443b628e4d/1080p/mp4/file.mp4',
    tipo: 'interno',
    url_miniatura:
      'https://1221studio.es/wp-content/uploads/2023/08/CAELE-MOSBY-1024x460.jpg',
  },
  {
    id: '5',
    url_video:
      'https://video.wixstatic.com/video/6bc4fd_a8070b3bfee749bf8e7d63295ee703ab/1080p/mp4/file.mp4',
    tipo: 'interno',
    url_miniatura:
      'https://1221studio.es/wp-content/uploads/2023/08/CAELE-MOSBY-1024x460.jpg',
  },
];

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'ROB | Fotógrafo / Filmmaker',
  },
  {
    path: 'fotos',
    component: FotosComponent,
    title: 'Fotos | ROB',
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
    path: 'contacto',
    component: ContactoComponent,
    title: 'Contacto | ROB',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
