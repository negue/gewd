import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState, Extension } from '@codemirror/state';
import { indentOnInput } from '@codemirror/language';
import { defaultKeymap, indentLess, indentMore } from '@codemirror/commands';

@Component({
  selector: 'gewd-codemirror',
  template: '',
  styleUrls: ['./codemirror.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodemirrorComponent implements OnInit, OnChanges {

  private _changedByValue = false;

  // current value of the codemirror-editor
  private _value = '';

  get value () {
    return this._value;
  }

  @Input()
  set value (_val) {
    this._updateValue(_val);
  }

  @Output()
  public changed = new EventEmitter<string>();

  @Input()
  public codemirrorExtensions: Extension[];

  @Input()
  public editorState: EditorState;

  @Output()
  public codemirrorCreated = new EventEmitter();

  public codeMirrorView: EditorView | null = null;

  public selectedRange: {from: number, to: number} | null = null;

  constructor(
    private element: ElementRef<HTMLElement>,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    if (!this.editorState) {
      this.editorState = this.createEditorState();
    }

    this.codeMirrorView = new EditorView({
      state: this.editorState,
      parent: this.element.nativeElement
    });

    this.codemirrorCreated.emit();
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

  public insertText(from: number, to: number, text: string): void  {
    const transaction = this.codeMirrorView?.state.update({
      changes: {
        from,
        to,
        insert: text
      },
      selection: {anchor: from + text.length},
      scrollIntoView: true
    });

    if (transaction) {
      this.codeMirrorView?.dispatch(transaction);
    }
  }

  public replaceSelection(text: string): void  {
    const selectionTransaction = this.codeMirrorView.state.replaceSelection(text);

    this.codeMirrorView.dispatch(selectionTransaction);
  }

  private _updateValue(value: string) {
    this._changedByValue = true;

    if (this._value !== value) {
      this.insertText(
        0,
        this.codeMirrorView?.state.doc.length,
        value
      );
    }

    this._value = value;

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
          if (tr.newSelection) {
            const ranges = tr.newSelection.ranges;

            if (ranges.length > 0) {
              const range = ranges[0];

              this.selectedRange = {
                from: range.from,
                to: range.to,
              };
              this.cd.markForCheck();
            }
          }

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
