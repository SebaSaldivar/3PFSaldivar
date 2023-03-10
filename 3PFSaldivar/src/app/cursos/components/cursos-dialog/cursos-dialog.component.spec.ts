import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoService } from '../../services/curso.service';

import { CursosDialogComponent } from './cursos-dialog.component';

describe('CursosDialogComponent', () => {
  let service: CursoService;
  let component: CursosDialogComponent;
  let fixture: ComponentFixture<CursosDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CursosDialogComponent ],
      providers: [ CursoService ]
    })
    .compileComponents();
    service = TestBed.inject(CursoService);
    fixture = TestBed.createComponent(CursosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
