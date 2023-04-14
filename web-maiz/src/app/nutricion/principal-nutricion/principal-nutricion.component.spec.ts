import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalNutricionComponent } from './principal-nutricion.component';

describe('PrincipalNutricionComponent', () => {
  let component: PrincipalNutricionComponent;
  let fixture: ComponentFixture<PrincipalNutricionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalNutricionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalNutricionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
