import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export declare interface SimpleChanges {
  [propName: string]: SimpleChange;
}

// https://medium.com/better-programming/link-previews-more-than-meets-the-eye-aa13c77c6d69
// https://medium.com/slack-developer-blog/everything-you-ever-wanted-to-know-about-unfurling-but-were-afraid-to-ask-or-how-to-make-your-e64b4bb9254

@Component({
  selector: 'gewd-url-block',
  templateUrl: './url-block.component.html',
  styleUrls: ['./url-block.component.css'],
})
export class UrlBlockComponent implements OnInit, OnChanges {
  @Input()
  public href: string;

  public parsed$: Observable<any>;

  private urlToCheck$ = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.urlToCheck$.next(this.href);

    this.parsed$ = this.urlToCheck$
      .pipe
      /*      mergeMap((url) => {
        //  this.http.head();
      })*/
      ();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { href } = changes;

    if (href) {
      this.urlToCheck$.next(href.currentValue);
    }
  }
}
