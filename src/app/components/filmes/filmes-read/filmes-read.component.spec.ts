import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesReadComponent } from './filmes-read.component';

describe('FilmesReadComponent', () => {
  let component: FilmesReadComponent;
  let fixture: ComponentFixture<FilmesReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmesReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
