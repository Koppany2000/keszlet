import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldteruletkoltsegComponent } from './foldteruletkoltseg.component';

describe('FoldteruletkoltsegComponent', () => {
  let component: FoldteruletkoltsegComponent;
  let fixture: ComponentFixture<FoldteruletkoltsegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldteruletkoltsegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldteruletkoltsegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
