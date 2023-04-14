import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalSiembraComponent } from './principal-siembra.component';

describe('PrincipalSiembraComponent', () => {
  let component: PrincipalSiembraComponent;
  let fixture: ComponentFixture<PrincipalSiembraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalSiembraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalSiembraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
