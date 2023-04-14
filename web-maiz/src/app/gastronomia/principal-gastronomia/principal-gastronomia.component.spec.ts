import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalGastronomiaComponent } from './principal-gastronomia.component';

describe('PrincipalGastronomiaComponent', () => {
  let component: PrincipalGastronomiaComponent;
  let fixture: ComponentFixture<PrincipalGastronomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalGastronomiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalGastronomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
