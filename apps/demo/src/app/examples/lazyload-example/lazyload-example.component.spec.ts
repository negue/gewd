import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadExampleComponent } from './lazyload-example.component';

describe('LazyloadExampleComponent', () => {
  let component: LazyloadExampleComponent;
  let fixture: ComponentFixture<LazyloadExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyloadExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
