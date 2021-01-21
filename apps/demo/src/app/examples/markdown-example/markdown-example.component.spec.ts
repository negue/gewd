import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownExampleComponent } from './markdown-example.component';

describe('MarkdownExampleComponent', () => {
  let component: MarkdownExampleComponent;
  let fixture: ComponentFixture<MarkdownExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
