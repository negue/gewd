import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MarkdownService } from '@gewd/markdown/service';

@Component({
  selector: 'gewd-markdown',
  templateUrl: './render-markdown.component.html',
  styleUrls: ['./render-markdown.component.css']
})
export class RenderMarkdownComponent implements OnInit {
  get markdown (): string {
    return this._markdown;
  }

  @Input()
  set markdown (value: string) {
    if (this._markdown  !== value) {
      this._markdown = value;
      this._htmlToShow$.next(value);
      this.compile();
    }
  }

  private _htmlToShow$ = new BehaviorSubject("");
  private _markdown: string;

  public parsedHtml$: Observable<string>;

  constructor (private service: MarkdownService) {
    this.parsedHtml$ = this._htmlToShow$;
  }

  async ngOnInit() {
    await this.compile();
  }

  private async compile() {
    const parsedHtml = await this.service.compileMarkdown(this._markdown, true);
    this._htmlToShow$.next(parsedHtml);
  }
}
