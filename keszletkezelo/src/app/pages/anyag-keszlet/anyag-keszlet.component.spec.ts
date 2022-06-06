import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyagKeszletComponent } from './anyag-keszlet.component';

describe('AnyagKeszletComponent', () => {
  let component: AnyagKeszletComponent;
  let fixture: ComponentFixture<AnyagKeszletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnyagKeszletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyagKeszletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
