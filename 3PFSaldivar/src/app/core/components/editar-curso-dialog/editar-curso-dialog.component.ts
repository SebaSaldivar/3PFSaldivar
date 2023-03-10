import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Estudiante } from 'src/app/estudiantes/models/estudiante';

@Component({
  selector: 'app-editar-curso-dialog',
  templateUrl: './editar-curso-dialog.component.html',
  styleUrls: ['./editar-curso-dialog.component.css'],
})
export class EditarCursoDialogComponent {

  estudiante: Estudiante = {
    legajo: 0,
    nombre: '',
    apellido: '',
    profesor: {
      id: '',
      nombre: '',
      apellido: '',
      materia: '',
    },
    notaFinal: 0,
    libre: false,
    fechaAprobacion: new Date(0, 0, 0),
  };

  formularioEditar: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<EditarCursoDialogComponent>,

    @Inject(MAT_DIALOG_DATA) public data: Estudiante
  ) {
    let regexTextos: string = '^[a-z]{1,50}$';
    this.formularioEditar = new FormGroup({
      legajo: new FormControl(data.legajo, [
        Validators.required,
        Validators.min(1),
        Validators.max(9999),
      ]),
      nombre: new FormControl(data.nombre, [
        Validators.required,
        Validators.pattern(regexTextos),
      ]),
      apellido: new FormControl(data.apellido, [
        Validators.required,
        Validators.pattern(regexTextos),
      ]),
      notaFinal: new FormControl(data.notaFinal, [
        Validators.required,
        Validators.min(1),
        Validators.max(10),
      ]),
      nombreProfesor: new FormControl(data.profesor.nombre, [
        Validators.required,
        Validators.pattern(regexTextos),
      ]),
      apellidoProfesor: new FormControl(data.profesor.apellido, [
        Validators.required,
        Validators.pattern(regexTextos),
      ]),
      materiaProfesor: new FormControl(data.profesor.materia, [
        Validators.required,
        Validators.pattern(regexTextos),
      ]),
      fechaAprobacion: new FormControl(data.fechaAprobacion, [
        Validators.required,
      ]),
      libre: new FormControl(data.libre),
    });
  }

  Cancelar() {
    this.dialogRef.close();
  }
}
