import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretoresCreateComponent } from './diretores-create.component';

describe('DiretoresCreateComponent', () => {
  let component: DiretoresCreateComponent;
  let fixture: ComponentFixture<DiretoresCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretoresCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretoresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
