import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyagKategoriakComponent } from './anyag-kategoriak.component';

describe('AnyagKategoriakComponent', () => {
  let component: AnyagKategoriakComponent;
  let fixture: ComponentFixture<AnyagKategoriakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnyagKategoriakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyagKategoriakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
