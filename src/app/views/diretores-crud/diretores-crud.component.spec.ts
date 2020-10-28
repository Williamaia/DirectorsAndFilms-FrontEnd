import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretoresCrudComponent } from './diretores-crud.component';

describe('DiretoresCrudComponent', () => {
  let component: DiretoresCrudComponent;
  let fixture: ComponentFixture<DiretoresCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretoresCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretoresCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
