import { Foto } from './foto';

export interface FotoCategoria {
  id: string;
  titulo: string;
  url_imagen_portada: string;
  fotos: Foto[];
}
