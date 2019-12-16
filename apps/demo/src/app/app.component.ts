import { Component } from '@angular/core';

@Component({
  selector: 'gewd-utils-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  constructor () {
  }

  textChanged ($event: Event, str: string) {
    console.info($event, str);
  }

  changeIt (textarea: HTMLTextAreaElement, markdown: any) {
    markdown.markdown = textarea.value;
    console.info(textarea.value, markdown.markdown);
  }
}
