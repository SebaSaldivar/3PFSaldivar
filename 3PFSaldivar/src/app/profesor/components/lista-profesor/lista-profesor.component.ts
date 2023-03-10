import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Profesor } from 'src/app/profesor/models/profesor'
import { Observable, Subscription } from 'rxjs';
import { ProfesorService } from '../../services/profesor.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-lista-profesor',
  templateUrl: './lista-profesor.component.html',
  styleUrls: ['./lista-profesor.component.css'],
})
export class ListaProfesorComponent implements OnInit, OnDestroy {
  profesores!: Profesor[];
  profesores$!: Observable<Profesor[]>;
  profesoresFiltrado$!: Observable<Profesor[]>;
  tablaVisible = false;
  textoAFiltrar!: string;

  suscripcion!: Subscription;

  constructor(
    private dialog: MatDialog,
    private profesoresService: ProfesorService
  ) {
  }

  ngOnInit(): void {
    this.profesores$ = this.profesoresService.ObtenerProfeObservable();
    console.log(this.profesores$)
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
  EditarProfesor(curso: Profesor) {

    Swal.fire(
      `En construcción`,
      'Próximamente',
      'info'
    )
  }

  AgregarProfe(){
    
    let unProfe = {
      id: '',
      nombre: 'Florencia',
      apellido: 'Marquez',
      materia: 'Angular',
    };

    this.profesoresService.AgregarProfe(unProfe).subscribe((unProfe: Profesor) => {

      Swal.fire(
        `Prof. ${unProfe.apellido}, ${unProfe.nombre}`,
        'Docente agregado!',
        'success'
      )
      this.profesores$ = this.profesoresService.ObtenerProfeObservable()
  })

  }

  EliminarProfe(profesor: Profesor) {
        this.profesoresService.EliminarCurso(profesor).subscribe((profesor: Profesor) => {

      Swal.fire(
        `Prof. ${profesor.apellido}, ${profesor.nombre}`,
        'Docente dado de baja!',
        'success'
      )
      
      this.profesores$ = this.profesoresService.ObtenerProfeObservable()
    });
  }

  filtrarProfe(texto:string){
    this.profesoresFiltrado$ = this.profesoresService.getListaFiltrada(texto)
    this.profesoresFiltrado$.subscribe((profesores:Profesor[])=> {
      if(profesores.length ==0){
        this.tablaVisible = false
      }else{
        this.tablaVisible = true
      }
    }) 
    
  }

}
