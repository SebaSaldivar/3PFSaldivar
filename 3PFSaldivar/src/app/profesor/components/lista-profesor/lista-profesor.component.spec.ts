import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProfesorService } from '../../services/profesor.service';

import { ListaProfesorComponent } from './lista-profesor.component';

describe('ListaProfesorComponent', () => {
  let component: ListaProfesorComponent;
  let fixture: ComponentFixture<ListaProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProfesorComponent ],
      imports: [ MatDialogModule, NoopAnimationsModule, HttpClientModule, FormsModule  ],
      providers: [ ProfesorService ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
