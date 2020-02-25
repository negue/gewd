import {
  Component,
  ElementRef,
  Input,
  OnInit
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MarkdownService, MarkdownCacheService } from '@gewd/markdown/service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'gewd-markdown',
  templateUrl: './render-markdown.component.html',
  styleUrls: ['./render-markdown.component.scss']
})
export class RenderMarkdownComponent implements OnInit {
  @Input()
  public showRawMd = false;

  @Input()
  public useCache = false;

  @Input()
  public allowMermaid = true;

  get markdown (): string {
    return this._markdown;
  }

  @Input()
  set markdown (value: string) {
    if (this._markdown  !== value) {
      this._markdown = value;
      if (this.showRawMd) {
        this._htmlToShow$.next(value);
      }
      this.compile();
    }
  }

  private _htmlToShow$ = new BehaviorSubject<string|SafeHtml>("");
  private _markdown: string;

  public parsedHtml$: Observable<string|SafeHtml>;

  constructor (private service: MarkdownService,
               private element: ElementRef,
               private _: DomSanitizer,
               private cache: MarkdownCacheService) {
    this.parsedHtml$ = this._htmlToShow$;
  }

  async ngOnInit() {
    await this.compile();
  }

  private async compile() {
    try {
      if (this.useCache) {
        const cachedMarkdown = await this.cache.getCached(this._markdown);
        if (!!cachedMarkdown) {
          this._htmlToShow$.next(this._.bypassSecurityTrustHtml(cachedMarkdown));
          return;
        }
      }

      const parsedHtml = await this.service.compileMarkdown(this._markdown, this.allowMermaid);

      this._htmlToShow$.next(this._.bypassSecurityTrustHtml(parsedHtml));

      if (this.useCache) {
        this.cache.saveCached(this._markdown, parsedHtml);
      }
    } catch (er) {
      console.error(er);
      this._htmlToShow$.next(er);
    }
  }
}
