import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { HighlightStyle, tags } from '@codemirror/highlight';
import { javascriptLanguage } from '@codemirror/lang-javascript';
import { oneDarkTheme } from '@codemirror/theme-one-dark';
import { indentOnInput } from '@codemirror/language';
import { defaultKeymap, indentLess, indentMore } from '@codemirror/commands';
import { autocompletion, completionKeymap } from '@codemirror/autocomplete';


const myStyle = HighlightStyle.define([
  {tag: tags.variableName, color: 'green'},
  {tag: tags.definition(tags.variableName), color: 'yellow'},
  {tag: tags.definitionKeyword, color: 'fuchsia'},
]);


@Component({
  selector: 'app-codemirror',
  template: '',
  styleUrls: ['./codemirror.component.scss']
})
export class CodemirrorComponent implements OnInit, OnChanges {

  private codeMirrorView: EditorView | null = null;

  @Input()
  public value = '';

  @Output()
  public changed = new EventEmitter<string>();

  constructor(private element: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    this.codeMirrorView = new EditorView({
      state: EditorState.create({
        doc: this.value,
        extensions: [
          // overrides first..
          oneDarkTheme,

          myStyle,
          javascriptLanguage,

          autocompletion(),
          keymap.of([
            ...defaultKeymap,
            ...completionKeymap,
            {
              key: 'Tab',
              preventDefault: true,
              run: indentMore,
            },
            {
              key: 'Shift-Tab',
              preventDefault: true,
              run: indentLess,
            },
          ]),

          indentOnInput(),
          // The basic setup needs to be at the end DUH
          // basicSetup,
          EditorState.changeFilter.of((tr) => {
            if (tr.docChanged) {
              this.value = tr.newDoc.toJSON().join('\n');

              this.changed.emit(this.value);
            }

            return true;
          })
        ]}),
      parent: this.element.nativeElement
    });


  }

  ngOnChanges({value}: SimpleChanges): void {
    if (value) {
      const currentEditorValue = this.codeMirrorView?.state.doc.toJSON().join('\n');

      if (currentEditorValue !== value.currentValue) {
        const transaction = this.codeMirrorView?.state.update({
          changes: {from: 0, to: this.codeMirrorView?.state.doc.length, insert: value.currentValue}
        });
        if (transaction) {
          this.codeMirrorView?.dispatch(transaction);
        }
      }
    }
  }

}
