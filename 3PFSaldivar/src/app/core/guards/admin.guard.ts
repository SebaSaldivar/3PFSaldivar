import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/autenticacion/models/sesion';
import { SesionService } from '../services/sesion.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private sesion: SesionService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sesion.obtenerSesion().pipe(
      map((sesion:Sesion) => {
        if(sesion.usuarioActivo?.admin){
          return true;
        }else{
        Swal.fire(
          'No tiene los permisos necesarios!',
          'contáctese con su administrador',
          'warning'
        )
          this.router.navigate(['inicio'])
          return false;
        }
      })
    )
  }
  
}
