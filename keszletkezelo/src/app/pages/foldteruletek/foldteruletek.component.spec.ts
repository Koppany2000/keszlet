import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldteruletekComponent } from './foldteruletek.component';

describe('FoldteruletekComponent', () => {
  let component: FoldteruletekComponent;
  let fixture: ComponentFixture<FoldteruletekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldteruletekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldteruletekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
