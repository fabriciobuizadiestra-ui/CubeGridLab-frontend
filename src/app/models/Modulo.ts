import type { Curso } from './Cursos';
import type { Leccion } from './Leccion';

export class Modulo {
  idModulo: number = 0;
  nombre: string = '';
  curso: Curso | null = null;
  lecciones: Leccion[] = [];
}
