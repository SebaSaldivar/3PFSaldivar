import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CursoService } from './curso.service';
import { Cursos } from '../models/cursos';
import { of } from 'rxjs';

describe('CursoService', () => {
  let service: CursoService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CursoService(httpClientSpy as any);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("el servicio retorna un arreglo de datos mockeados", (done: DoneFn)=>{
    let fechaPrueba = new Date()
    const mockDatos: Cursos[] = [
      {
        "comision": 1,
        "nombre": "Soft",
        "profesor": {
          id: '2',
          nombre: 'Juan',
          apellido: 'Hernandez',
          materia: 'SQL'
        },
        "presencial": false,
        "fechaInicio": fechaPrueba,
        "id": "6"
      },
     ];

     httpClientSpy.get.and.returnValue(of(mockDatos));

     service.ObtenerCursosObservable().subscribe((cursos: Cursos[]) => {
       expect(cursos).toEqual(mockDatos);
       done();
     });
  })
});
