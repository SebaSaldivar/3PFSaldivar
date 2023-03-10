import { Profesor } from '../../profesor/models/profesor';

export interface Cursos {
  id: string;
  comision: number;
  nombre: string;
  profesor: Profesor;
  presencial: boolean;
  fechaInicio: Date;
}
