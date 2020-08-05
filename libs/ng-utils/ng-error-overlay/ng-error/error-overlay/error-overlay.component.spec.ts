import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorOverlayComponent } from './error-overlay.component';

describe('ErrorOverlayComponent', () => {
  let component: ErrorOverlayComponent;
  let fixture: ComponentFixture<ErrorOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
