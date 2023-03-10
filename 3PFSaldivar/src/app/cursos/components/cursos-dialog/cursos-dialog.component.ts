import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profesor } from 'src/app/profesor/models/profesor';
import { ProfesorService } from 'src/app/profesor/services/profesor.service';
import { Cursos } from '../../models/cursos';
import { CursoService } from '../../services/curso.service';
;

@Component({
  selector: 'app-cursos-dialog',
  templateUrl: './cursos-dialog.component.html',
  styleUrls: ['./cursos-dialog.component.css']
})
export class CursosDialogComponent implements OnInit {

  formulario!: FormGroup;
  profesores$!: Observable<Profesor[]>;

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private profesores: ProfesorService,
    private dialogRef: MatDialogRef<CursosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public curso: Cursos
  ){}

  ngOnInit(): void {
    this.profesores$ = this.profesores.ObtenerProfeObservable();
    this.formulario = new FormGroup({
      id: new FormControl(this.curso.id),
      comision: new FormControl(this.curso.comision),
      fechaInicio: new FormControl(this.curso.fechaInicio),
      presencial: new FormControl(this.curso.presencial),
      nombre: new FormControl(this.curso.nombre),
      profesor: new FormControl(this.curso.profesor)
    })
  }

  EditarCurso(){
    let curso: Cursos = {
      id: this.formulario.value.id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      presencial: this.formulario.value.presencial,
      profesor: this.formulario.value.profesor
    };

    this.cursoService.EditarCurso(curso).subscribe((curso: Cursos) => {
      this.dialogRef.close(curso);
    });
  }
}
