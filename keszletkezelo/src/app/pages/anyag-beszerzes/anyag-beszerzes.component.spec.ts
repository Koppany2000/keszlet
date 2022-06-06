import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyagBeszerzesComponent } from './anyag-beszerzes.component';

describe('AnyagBeszerzesComponent', () => {
  let component: AnyagBeszerzesComponent;
  let fixture: ComponentFixture<AnyagBeszerzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnyagBeszerzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyagBeszerzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
