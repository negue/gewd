import { ChangeDetectorRef, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { emojiExampleList } from '../../example-emoji-list';
import { oneDark } from '@codemirror/theme-one-dark';
import { javascript, javascriptLanguage } from '@codemirror/lang-javascript';
import { autocompletion, completionKeymap } from '@codemirror/autocomplete';
import { keymap } from '@codemirror/view';
import { Extension } from '@codemirror/state';
import { basicSetup } from '@codemirror/basic-setup';
import { CodemirrorComponent } from '@gewd/components/codemirror';

const sharedExtensions: Extension[] = [
     oneDark,

    javascriptLanguage, //.data.of({autocomplete:jsCompletion}),

    javascript(),
];

@Component({
  selector: 'gewd-codemirror-example',
  templateUrl: './codemirror-example.component.html',
  styleUrls: ['./codemirror-example.component.css']
})
export class CodemirrorExampleComponent {
  private subscription: Subscription;

  emojiList = emojiExampleList;

  exampleJsText = `
export const some = 'string';

export function test() {
   return 42;
}
  `.trim();

  visibleJsCode = this.exampleJsText;

  longExampleText =`
// long code example
export const some = 'string';

export function test() {
   return 42;
}

export const some = 'string';

export function test() {
   return 42;
}

export const some = 'string';

export function test() {
   return 42;
}

export const some = 'string';

export function test() {
   return 42;
}
  `.trim();

  normalExtensions: Extension[] = [
    ...sharedExtensions
  ]

  extensions: Extension = [
    basicSetup,
     // overrides first..

    ...sharedExtensions,

    autocompletion(),
    keymap.of([
      ...completionKeymap,
    ]),
  ];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnDestroy (): void {
    this.subscription.unsubscribe();
  }

  updateCodemirror (codemirror: CodemirrorComponent, textarea: HTMLTextAreaElement): void  {
    codemirror.value = textarea.value;
    this.cd.detectChanges();
  }

  insertText (codemirror: CodemirrorComponent): void  {
    codemirror.insertText(
      codemirror.selectedRange.from,
      codemirror.selectedRange.to,
      'test'
    );

    codemirror.codeMirrorView.focus();
  }

  replaceCode (): void  {
    this.visibleJsCode = `
      function thisIs() {
        areplacedText.shouldWork();
      }
    `;
  }
}
