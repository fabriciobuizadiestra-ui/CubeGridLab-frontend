import { User } from './User';
import type { Modulo } from './Modulo';

export class Curso {
  idCurso: number = 0;
  nombre: string = '';
  descripcion: string = '';
  docente: User = new User();
  modulos: Modulo[] = [];
}
