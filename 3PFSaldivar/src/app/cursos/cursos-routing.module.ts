import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { SesionGuard } from '../core/guards/sesion.guard';

const routes: Routes = [
    { path: '', canActivate:[SesionGuard], component: ListaCursosComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
