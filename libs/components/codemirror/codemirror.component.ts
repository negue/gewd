import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState, Extension } from '@codemirror/state';
import { indentOnInput } from '@codemirror/language';
import { defaultKeymap, indentLess, indentMore } from '@codemirror/commands';

@Component({
  selector: 'gewd-codemirror',
  template: '',
  styleUrls: ['./codemirror.component.scss']
})
export class CodemirrorComponent implements OnInit, OnChanges {

  private _changedByValue = false;
  private codeMirrorView: EditorView | null = null;
  private _value = '';

  get value () {
    return this._value;
  }

  @Input()
  set value (_val) {
    // the usual ngChanges weren't called...
    this._value = _val;
    this._updateValue(_val);
  }

  @Output()
  public changed = new EventEmitter<string>();

  @Input()
  public codemirrorExtensions: Extension[];

  @Input()
  public editorState: EditorState;

  constructor(private element: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    this.codeMirrorView = new EditorView({
      state: this.editorState ?? this.createEditorState(),
      parent: this.element.nativeElement
    });
  }

  ngOnChanges({value, codemirrorExtensions, editorState}: SimpleChanges): void {
    if (value) {
      this._updateValue(value.currentValue);
    }

    if (codemirrorExtensions) {
      this.replaceEditorState();
    }

    if (editorState) {
      this.codeMirrorView?.setState(editorState.currentValue);
    }
  }

  private _updateValue(value: string) {
    this._changedByValue = true;
    const currentEditorValue = this.codeMirrorView?.state.doc.toJSON().join('\n');

    if (currentEditorValue !== value) {
      const transaction = this.codeMirrorView?.state.update({
        changes: {
          from: 0,
          to: this.codeMirrorView?.state.doc.length,
          insert: value
        }
      });

      if (transaction) {
        this.codeMirrorView?.dispatch(transaction);
      }
    }

    this._changedByValue = false;
  }

  private replaceEditorState(){
    this.codeMirrorView?.setState(this.createEditorState());
  }

  private createEditorState () {
    return EditorState.create({
      doc: this.value,
      extensions: [
        ...this.codemirrorExtensions,

        keymap.of([
          ...defaultKeymap,
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
          if (tr.docChanged && !this._changedByValue) {
            this._value = tr.newDoc.toJSON().join('\n');

            this.changed.emit(this._value);
          }

          return true;
        })
      ]
    });
  }
}
