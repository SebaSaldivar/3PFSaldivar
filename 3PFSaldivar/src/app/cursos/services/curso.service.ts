import { Injectable, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { Cursos } from '../models/cursos';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/environment/environment';

@Injectable()
export class CursoService {
  
  constructor(
    private http: HttpClient
  ) {}

  ObtenerCursosObservable(): Observable<Cursos[]>{
  return this.http.get<Cursos[]>(`${env.apiURL}/cursos`)
  }

  AgregarCurso(curso: Cursos) {

  }

  EditarCurso(curso: Cursos): Observable<Cursos>{
    return this.http.delete<Cursos>(`${env.apiURL}/cursos/${curso.id}`)
  }

  EliminarCurso(curso: Cursos): Observable<Cursos>{
    return this.http.delete<Cursos>(`${env.apiURL}/cursos/${curso.id}`)
  }
}
