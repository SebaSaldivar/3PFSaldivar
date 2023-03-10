import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfesorService } from './profesor.service';
import { of } from 'rxjs';
import { Profesor } from '../models/profesor';

describe('ProfesorService', () => {
  let service: ProfesorService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ProfesorService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("el servicio retorna un arreglo de datos mockeados", (done: DoneFn)=>{
    let fechaPrueba = new Date()
    const mockDatos: Profesor[] = [
      {
        "nombre": "Mohammed",
        "apellido": "Jenkins",
        "materia": "Fish",
        "id": "7"
       },
       {
        "nombre": "Alessia",
        "apellido": "Zulauf",
        "materia": "Car",
        "id": "8"
       },
     ];

     httpClientSpy.get.and.returnValue(of(mockDatos));

     service.ObtenerProfeObservable().subscribe((cursos: Profesor[]) => {
      expect(cursos).toEqual(mockDatos);
      done();
     });
  })
});

