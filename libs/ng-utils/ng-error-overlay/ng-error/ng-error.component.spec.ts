import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgErrorComponent } from './ng-error.component';

describe('NgErrorComponent', () => {
  let component: NgErrorComponent;
  let fixture: ComponentFixture<NgErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
