import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EszkozBeszerzesComponent } from './eszkoz-beszerzes.component';

describe('EszkozBeszerzesComponent', () => {
  let component: EszkozBeszerzesComponent;
  let fixture: ComponentFixture<EszkozBeszerzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EszkozBeszerzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EszkozBeszerzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
