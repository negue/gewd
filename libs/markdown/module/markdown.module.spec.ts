import { TestBed, waitForAsync } from '@angular/core/testing';
import { MarkdownModule } from './markdown.module';

describe('MarkdownWorkerModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [MarkdownModule],
    teardown: { destroyAfterEach: false }
}).compileComponents();
  }));

  it('should create', () => {
    expect(MarkdownModule).toBeDefined();
  });
});
