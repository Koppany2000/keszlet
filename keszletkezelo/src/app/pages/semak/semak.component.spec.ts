import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakComponent } from './semak.component';

describe('SemakComponent', () => {
  let component: SemakComponent;
  let fixture: ComponentFixture<SemakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
