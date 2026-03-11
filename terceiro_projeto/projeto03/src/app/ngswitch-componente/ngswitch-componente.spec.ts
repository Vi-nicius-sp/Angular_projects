import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchComponente } from './ngswitch-componente';

describe('NgswitchComponente', () => {
  let component: NgswitchComponente;
  let fixture: ComponentFixture<NgswitchComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgswitchComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgswitchComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
