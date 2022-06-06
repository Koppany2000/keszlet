import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltalanosBeszerzesekComponent } from './altalanos-beszerzesek.component';

describe('AltalanosBeszerzesekComponent', () => {
  let component: AltalanosBeszerzesekComponent;
  let fixture: ComponentFixture<AltalanosBeszerzesekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltalanosBeszerzesekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltalanosBeszerzesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
