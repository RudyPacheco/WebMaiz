import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalImportanciaComponent } from './principal-importancia.component';

describe('PrincipalImportanciaComponent', () => {
  let component: PrincipalImportanciaComponent;
  let fixture: ComponentFixture<PrincipalImportanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalImportanciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalImportanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
