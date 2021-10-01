import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MarkdownCacheService, MarkdownService } from '@gewd/markdown/service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface MarkdownLinkClicked {
  event: Event;
  link: HTMLLinkElement;
}

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

  @Output()
  public onLinkClick = new EventEmitter<MarkdownLinkClicked>();

  private _htmlToShow$ = new BehaviorSubject<string|SafeHtml>("");
  private _markdown: string;

  public parsedHtml$: Observable<string|SafeHtml>;

  constructor (private service: MarkdownService,
               private element: ElementRef,
               private sanitizer: DomSanitizer,
               private cache: MarkdownCacheService) {
    this.parsedHtml$ = this._htmlToShow$;
  }

  async ngOnInit() {
    await this.compile();
  }

  @HostListener('click', ['$event'])
  onClick(e: Event) {
    let target = e.target as HTMLElement;

    let aHref: HTMLLinkElement = null;

    while (aHref === null && target !== null) {
      if (target.tagName === 'A') {
        aHref = target as any;
      }

      target = target.parentElement;
    }

    if (aHref) {
      this.onLinkClick.next({
        event: e,
        link: aHref
      });
    }
  }

  private async compile() {
    try {
      if (this.useCache) {
        const cachedMarkdown = await this.cache.getCached(this._markdown);
        if (!!cachedMarkdown) {
          this._htmlToShow$.next(this.sanitizer.bypassSecurityTrustHtml(cachedMarkdown));
          return;
        }
      }

      const parsedHtml = await this.service.compileMarkdown(this._markdown, this.allowMermaid);

      this._htmlToShow$.next(this.sanitizer.bypassSecurityTrustHtml(parsedHtml));

      if (this.useCache) {
        this.cache.saveCached(this._markdown, parsedHtml);
      }
    } catch (er) {
      console.error(er);
      this._htmlToShow$.next(er);
    }
  }
}
