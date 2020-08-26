import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePagerComponent } from './simple-pager.component';

describe('SimplePagerComponent', () => {
  let component: SimplePagerComponent;
  let fixture: ComponentFixture<SimplePagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
