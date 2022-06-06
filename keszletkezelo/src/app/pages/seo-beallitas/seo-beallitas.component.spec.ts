import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoBeallitasComponent } from './seo-beallitas.component';

describe('SeoBeallitasComponent', () => {
  let component: SeoBeallitasComponent;
  let fixture: ComponentFixture<SeoBeallitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeoBeallitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoBeallitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
