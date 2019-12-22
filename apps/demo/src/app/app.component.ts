import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { emojiExampleList } from './example-emoji-list';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const exampleMD = () => fetch('./assets/example.md').then(r => r.text());

@Component({
  selector: 'gewd-utils-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private markdown$ = new Subject();
  private subscription: Subscription;

  exampleMD = exampleMD();
  emojiList = emojiExampleList;

  @ViewChild('markdown', {static: true})
  markdown: any;

  constructor () {
  }

  changeIt (textarea: HTMLTextAreaElement, markdown: any) {
    this.markdown$.next(textarea.value);
  }

  ngOnDestroy (): void {
    this.subscription.unsubscribe();
  }

  ngOnInit (): void {
    this.subscription = this.markdown$
      .pipe(
        debounceTime(350)
      )
      .subscribe(value => {
        this.markdown.markdown = value;
      })
  }
}
