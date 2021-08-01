import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { emojiExampleList } from '../../example-emoji-list';
import { oneDarkTheme } from '@codemirror/theme-one-dark';
import { javascript, javascriptLanguage } from '@codemirror/lang-javascript';
import { autocompletion, completionKeymap } from '@codemirror/autocomplete';
import { keymap } from '@codemirror/view';
import { Extension } from '@codemirror/state';
import { basicSetup } from '@codemirror/basic-setup';
import { CodemirrorComponent } from '@gewd/components/codemirror';

@Component({
  selector: 'gewd-codemirror-example',
  templateUrl: './codemirror-example.component.html',
  styleUrls: ['./codemirror-example.component.css']
})
export class CodemirrorExampleComponent implements OnInit {
  private subscription: Subscription;

  emojiList = emojiExampleList;

  normalExtensions: Extension[] = [
    oneDarkTheme,
  ]

  extensions: Extension = [
    basicSetup,
     // overrides first..
    oneDarkTheme,

    javascript(),
    javascriptLanguage, //.data.of({autocomplete:jsCompletion}),

    autocompletion(),
    keymap.of([
      ...completionKeymap,
    ]),
  ];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnDestroy (): void {
    this.subscription.unsubscribe();
  }

  ngOnInit (): void {

  }


  updateCodemirror (codemirror: CodemirrorComponent, textarea: HTMLTextAreaElement) {
    codemirror.value = textarea.value;
    this.cd.detectChanges();
  }

  insertText (codemirror: CodemirrorComponent) {
    codemirror.insertText(
      codemirror.selectedRange.from,
      codemirror.selectedRange.to,
      'test'
    );

    codemirror.codeMirrorView.focus();
  }
}
