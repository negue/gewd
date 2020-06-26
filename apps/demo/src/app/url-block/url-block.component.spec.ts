import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlBlockComponent } from './url-block.component';

describe('UrlBlockComponent', () => {
  let component: UrlBlockComponent;
  let fixture: ComponentFixture<UrlBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
