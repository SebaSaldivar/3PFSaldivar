import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/material/material.module';


import { EditarCursoDialogComponent } from './editar-curso-dialog.component';
import { CursosModule } from '../../../cursos/cursos.module';
import { Estudiante } from '../../../estudiantes/models/estudiante';

@NgModule({ 
  imports: [ MatDialogModule ],
})

class DialogTestModule { }

describe('Prueba Unitaria de EditarCursoDialogComponent', () => {
  let dialogRef: MatDialogRef<EditarCursoDialogComponent>;
  let component: EditarCursoDialogComponent;
  let fixture: ComponentFixture<EditarCursoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCursoDialogComponent ],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        MatDialogModule,
        DialogTestModule,
        CursosModule 
       ],
       providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    })

    .compileComponents();

    dialogRef = TestBed.inject(MatDialogRef);

    fixture = TestBed.createComponent(EditarCursoDialogComponent);
    component = new EditarCursoDialogComponent(dialogRef, TestBed.inject(MAT_DIALOG_DATA));
    fixture.detectChanges();
  });
    

/*   it('debería cambiar el formulario a válido cuando ingresamos el campo legajo', () => {
    const legajo = component.formularioEditar.controls['legajo'];
    legajo.setValue('123456');
    expect(component.formularioEditar.valid).toBeTruthy();
  }); */

  it('El formulario cambia a VALID cuando ingresamos el campo legajo', () => {
    const dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    const data: Estudiante = {
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
    const component = new EditarCursoDialogComponent(dialogRef, data)
    const legajo = component.formularioEditar.get('legajo');
    legajo!.setValue('12345');
    expect(component.formularioEditar.valid).toBeTruthy();
  });

});
