import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretoresReadComponent } from './diretores-read.component';

describe('DiretoresReadComponent', () => {
  let component: DiretoresReadComponent;
  let fixture: ComponentFixture<DiretoresReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretoresReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretoresReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
