import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/autenticacion/models/sesion';
import { SesionService } from '../../services/sesion.service';
import Swal from 'sweetalert2'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{

  sesion$!: Observable<Sesion>;

  constructor(
    private sesion: SesionService,
    private router: Router,
 
  ){  }

  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
  }

logout(){
  let sesionlogout: Sesion = {
    sesionActiva: false
  }
  this.sesion.logout(sesionlogout)
  Swal.fire(
    'Ha salido correctamente',
    'Gracias por su visita!',
    'success'
  )
  this.router.navigate(['inicio'])
}
}
