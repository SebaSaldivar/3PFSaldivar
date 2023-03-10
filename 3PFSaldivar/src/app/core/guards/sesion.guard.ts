import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/autenticacion/models/sesion';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private sesion: SesionService,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sesion.obtenerSesion().pipe(
      map((sesion:Sesion) => {
        if(sesion.sesionActiva){
          return true;
        }else{
          this.router.navigate(['autenticacion'])
            return false;
          }
        })
      )
    }
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.sesion.obtenerSesion().pipe(
        map((sesion:Sesion) => {
          if(sesion.sesionActiva){
            return true;
          }else{
            this.router.navigate(['autenticacion'])
              return false;
            }
          })
        )
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.sesion.obtenerSesion().pipe(
        map((sesion:Sesion) => {
          if(sesion.sesionActiva){
            return true;
          }else{
            this.router.navigate(['autenticacion'])
              return false;
            }
          })
        )
  }
}
