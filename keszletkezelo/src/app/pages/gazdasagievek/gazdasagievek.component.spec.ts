import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GazdasagievekComponent } from './gazdasagievek.component';

describe('GazdasagievekComponent', () => {
  let component: GazdasagievekComponent;
  let fixture: ComponentFixture<GazdasagievekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GazdasagievekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GazdasagievekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
