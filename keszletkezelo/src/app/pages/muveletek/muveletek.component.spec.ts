import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuveletekComponent } from './muveletek.component';

describe('MuveletekComponent', () => {
  let component: MuveletekComponent;
  let fixture: ComponentFixture<MuveletekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuveletekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuveletekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
