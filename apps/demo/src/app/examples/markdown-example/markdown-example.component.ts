import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject, Subscription} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {MarkdownLinkClicked} from "@gewd/markdown";
import {emojiExampleList} from "../../example-emoji-list";

@Component({
  selector: 'gewd-markdown-example',
  templateUrl: './markdown-example.component.html',
  styleUrls: ['./markdown-example.component.css']
})
export class MarkdownExampleComponent implements OnInit {
  private subscription: Subscription;
  private markdown$ = new Subject();

  readmeMD$ = this.http.get('./assets/readme/markdown/README.md', {
    responseType: 'text'
  });

  exampleMD$ = this.http.get('./assets/example.md', {
    responseType: 'text'
  });

  @ViewChild('markdown', {static: true})
  markdown: any;

  emojiList = emojiExampleList;

  constructor(private http: HttpClient) { }

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

  changeIt (newMarkdown: string, markdown: any) {
    this.markdown$.next(newMarkdown);
  }

  handleLinkClick ($event: MarkdownLinkClicked) {
    $event.event.preventDefault();

    alert('Link Click Handled by Markdown: ' + $event.link.href);
  }
}
