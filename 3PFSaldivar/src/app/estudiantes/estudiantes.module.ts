import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './components/students/students.component';
import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { AlumnosService } from './services/alumnos.service';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    StudentsComponent,
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    SharedModule,
    MatDialogModule 
  ],
  providers: [
    AlumnosService
  ]
})
export class EstudiantesModule { }
