import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { emojiExampleList } from '../../example-emoji-list';
import { oneDarkTheme } from '@codemirror/theme-one-dark';
import { javascript, javascriptLanguage } from '@codemirror/lang-javascript';
import { autocompletion, completeFromList, completionKeymap } from '@codemirror/autocomplete';
import { keymap } from '@codemirror/view';
import { Extension } from '@codemirror/state';
import { basicSetup } from '@codemirror/basic-setup';
import { CodemirrorComponent } from '@gewd/components/codemirror';

let keywords="break case catch class const continue debugger default delete do else enum export extends false finally for function if implements import interface in instanceof let new package private protected public return static super switch this throw true try typeof var void while with yield".split(" ").map(kw=>({label:kw,type:"keyword"}));

  let jsCompletion=completeFromList([...keywords]);
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
}
