import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private loginService: LoginService,
    private router: Router
  ){

  }

  ngOnInit(): void {
  this.formulario = new FormGroup({
    usuario: new FormControl(),
    contrasena: new FormControl(),
    admin: new FormControl(false),
  })
  }

  login(){
    let usuario: Usuario = { 
      usuario : this.formulario.value.usuario,
      contrasena : this.formulario.value.constrasena,
      admin : this.formulario.value.admin
    }
    
    this.loginService.login(usuario)
    Swal.fire(
      'Ingreso correcto',
      'Bienvenido!',
      'success'
    )
    this.router.navigate(['inicio'])
  }

}
