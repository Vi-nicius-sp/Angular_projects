import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsComponente } from './bindings-componente';

describe('BindingsComponente', () => {
  let component: BindingsComponente;
  let fixture: ComponentFixture<BindingsComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingsComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingsComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
