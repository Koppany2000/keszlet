import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelepulesekComponent } from './telepulesek.component';

describe('TelepulesekComponent', () => {
  let component: TelepulesekComponent;
  let fixture: ComponentFixture<TelepulesekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelepulesekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelepulesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
