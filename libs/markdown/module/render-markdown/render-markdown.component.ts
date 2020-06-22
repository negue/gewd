import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MarkdownCacheService, MarkdownService } from '@gewd/markdown/service';
import { MermaidService } from '@gewd/markdown/service/mermaid.service';

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

  @Input()
  public mermaidTheme: string;

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

  private _htmlToShow$ = new BehaviorSubject<string>("");
  private _markdown: string;

  public parsedHtml$: Observable<string>;

  constructor (private service: MarkdownService,
               private mermaid: MermaidService,
               private cache: MarkdownCacheService) {
    this.parsedHtml$ = this._htmlToShow$;
  }

  ngOnInit() {
    this.compile();
  }

  private async compile() {
    try {
      if (this.useCache) {
        const cachedMarkdown = await this.cache.getCached(this._markdown);
        if (!!cachedMarkdown) {
          this._htmlToShow$.next(cachedMarkdown);
          return;
        }
      }

      let parsedHtml = await this.service.compileMarkdown(this._markdown);

      if (this.allowMermaid) {
        parsedHtml = await this.mermaid.compileMermaid(parsedHtml);
      }

      this._htmlToShow$.next(parsedHtml.trim());

      if (this.useCache) {
        this.cache.saveCached(this._markdown, parsedHtml);
      }
    } catch (er) {
      console.error(er);
      this._htmlToShow$.next(er);
    }
  }
}
