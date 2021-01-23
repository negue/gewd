import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoScaleComponent } from './auto-scale.component';

describe('AutoScaleComponent', () => {
  let component: AutoScaleComponent;
  let fixture: ComponentFixture<AutoScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoScaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
