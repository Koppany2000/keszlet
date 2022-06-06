import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldhasznalokComponent } from './foldhasznalok.component';

describe('FoldhasznalokComponent', () => {
  let component: FoldhasznalokComponent;
  let fixture: ComponentFixture<FoldhasznalokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldhasznalokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldhasznalokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
