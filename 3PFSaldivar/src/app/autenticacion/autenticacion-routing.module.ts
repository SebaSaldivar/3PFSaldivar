import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthInicioComponent } from './components/auth-inicio/auth-inicio.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', component: AuthInicioComponent, children: [
    {path: 'login', component: LoginComponent}
  ]}, 
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})

export class AutenticacionRoutingModule { }
