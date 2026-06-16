import type { Modulo } from './Modulo';

export class Leccion {
  idLeccion: number = 0;
  titulo: string = '';
  contenido: string = '';
  modulo: Modulo | null = null;
}
