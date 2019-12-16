import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderMarkdownComponent } from './render-markdown.component';

describe('RenderMarkdownComponent', () => {
  let component: RenderMarkdownComponent;
  let fixture: ComponentFixture<RenderMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
