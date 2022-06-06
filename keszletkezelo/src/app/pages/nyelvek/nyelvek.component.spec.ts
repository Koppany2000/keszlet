import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyelvekComponent } from './nyelvek.component';

describe('NyelvekComponent', () => {
  let component: NyelvekComponent;
  let fixture: ComponentFixture<NyelvekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NyelvekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NyelvekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
