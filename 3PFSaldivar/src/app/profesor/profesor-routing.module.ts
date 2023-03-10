import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SesionGuard } from '../core/guards/sesion.guard';
import { ListaProfesorComponent } from './components/lista-profesor/lista-profesor.component';


const routes: Routes = [
/*   { path: '', redirectTo: 'inicio', pathMatch: 'full' }, */
  { path: '', canActivate:[SesionGuard], component: ListaProfesorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorRoutingModule {}
