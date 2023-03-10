import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Profesor } from '../models/profesor';
import { map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/environment/environment';

@Injectable()
export class ProfesorService {

  private listaProfesores!: Profesor[]

  constructor(
    private http: HttpClient
  ) {
   
    /* this.listaProfesores$ = new BehaviorSubject(this.listaProfesores); */
    /*     this.listaProfesores$ = new Observable<Profesor[]>((suscriptor) =>{
      suscriptor.next(this.listaProfesores) }) */

   
  }

  public getListaFiltrada(textoAFiltrar:string): Observable<Profesor[]> {

    return of(this.listaProfesores)
      .pipe(
        map((listaProfesores: Profesor[]) => {
          return listaProfesores.filter(
            (profesor: Profesor) => profesor.materia === textoAFiltrar
          );
        })
      );
  }

  ObtenerProfeObservable(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(`${env.apiURL}/profesor`)
  }

  AgregarProfe(profe: Profesor): Observable<Profesor> {
    
    return this.http.post<Profesor>(`${env.apiURL}/profesor/`, profe);
    
  }

  EditarProfe(profesor: Profesor) {
/*     let indice = this.listaProfesores.findIndex(
      (Profesor) => Profesor.apellido === profesor.apellido
    );
    this.listaProfesores[indice] = profesor;
    this.listaProfesores$.next(this.listaProfesores); */
  }

  EliminarCurso(profesor: Profesor): Observable<Profesor>{
    return this.http.delete<Profesor>(`${env.apiURL}/profesor/${profesor.id}`)
  }
}
