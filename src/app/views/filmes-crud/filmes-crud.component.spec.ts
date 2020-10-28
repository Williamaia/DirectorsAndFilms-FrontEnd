import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesCrudComponent } from './filmes-crud.component';

describe('FilmesCrudComponent', () => {
  let component: FilmesCrudComponent;
  let fixture: ComponentFixture<FilmesCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmesCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
