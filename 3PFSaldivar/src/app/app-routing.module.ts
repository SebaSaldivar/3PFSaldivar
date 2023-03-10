import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/components/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {path: 'estudiantes', 
  loadChildren: () => import ('./estudiantes/estudiantes.module').then((modulo) => modulo.EstudiantesModule) 
  },
  {path: 'cursos', 
  loadChildren: () => import ('./cursos/cursos.module').then((modulo) => modulo.CursosModule) 
  },
  {path: 'profesores', 
  loadChildren: () => import ('./profesor/profesor.module').then((modulo) => modulo.ProfesorModule) 
  },
  {path: 'autenticacion', 
  loadChildren: () => import ('./autenticacion/autenticacion.module').then((modulo) => modulo.AutenticacionModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
