import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPagComponent } from './header-pag.component';

describe('HeaderPagComponent', () => {
  let component: HeaderPagComponent;
  let fixture: ComponentFixture<HeaderPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
