import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EszkozKeszletComponent } from './eszkoz-keszlet.component';

describe('EszkozKeszletComponent', () => {
  let component: EszkozKeszletComponent;
  let fixture: ComponentFixture<EszkozKeszletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EszkozKeszletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EszkozKeszletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
