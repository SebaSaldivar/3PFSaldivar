import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { CursoService } from '../../services/curso.service';

import { ListaCursosComponent } from './lista-cursos.component';
import { ProfesorService } from '../../../profesor/services/profesor.service';

describe('ListaCursosComponent', () => {
  let component: ListaCursosComponent;
  let cursoService: CursoService;
  let fixture: ComponentFixture<ListaCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCursosComponent ],
      imports: [ MatDialogModule, HttpClientModule ],
      providers: [ CursoService, ProfesorService ]
    })
    .compileComponents();
    cursoService = TestBed.inject(CursoService);
    fixture = TestBed.createComponent(ListaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
