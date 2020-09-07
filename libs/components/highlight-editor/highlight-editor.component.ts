import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { ElementCssService } from '@gewd/ng-utils/css-props';
import { HighlightService } from './highlight.service';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'gewd-prism-editor',
  templateUrl: './highlight-editor.component.html',
  styleUrls: ['./highlight-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ElementCssService
  ]
})
export class HighlightEditorComponent implements OnInit, OnChanges {

  @Input()
  public value = '';

  @Input()
  public language = '';

  @Input()
  public debounceTime = 600;

  @Input()
  public useTabs = false;

  @Input()
  public spaceWidth = 2;

  @Output()
  public changed = new EventEmitter<string>();

  public value$ = new BehaviorSubject(this.value);
  public language$ = new BehaviorSubject(this.language);


  public showHighlighedCode$ = new BehaviorSubject(false);
  public highlighedCode$: Observable<string>;

  constructor(private cd: ChangeDetectorRef,
              private cssProps: ElementCssService,
              private prism: HighlightService) {
  }

  ngOnInit(): void {
    this.updateLinesAmount();

    this.highlighedCode$ = combineLatest([
      this.value$,
      this.language$
    ]).pipe(
      distinctUntilChanged(([oldVal, oldLang], [newVal, newLang]) => {
        if (oldLang !== newLang) {
          return false;
        }

        if (oldVal !== newVal){
          return false;
        }

        return true;
      }),
      tap(() => {
        this.showHighlighedCode$.next(false);

        this.cd.markForCheck();
      }),
      debounceTime(this.debounceTime),
      switchMap(([code, lang]) => this.prism.highlightCode(code, lang))
    );
  }

  onChange(value: string) {
    this.value = value;
    this.changed.next(value);
    this.value$.next(value);
    this.updateLinesAmount();

    this.cd.detectChanges();
  }

  private updateLinesAmount () {
    if (!this.value) {
      return;
    }

    const lines = this.value.split('\n').length;

    this.cssProps.updateElementVars({
      '--lines-amount': lines +1
    });
  }

  ngOnChanges ({ value, language }: SimpleChanges): void {
    if (value) {
      this.value$.next(value.currentValue);
    }

    if (language) {
      this.language$.next(language.currentValue);
    }

  }

  morphDone () {
    this.showHighlighedCode$.next(true);
    this.cd.detectChanges();

    console.info('morphDone');
  }

  handleTab (event: KeyboardEvent, textarea: HTMLTextAreaElement) {
    if (event.key !== "Tab") {
      return;
    }

    let textChanged = false;

    const backwards = event.shiftKey;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const valueToWork = this.useTabs ? '\t' : ''.padEnd(this.spaceWidth, ' ');

    const textValueUntilStart = textarea.value.substr(0, start);
    const textValueFromStart = textarea.value.substr(end);


    if (backwards) {
      if (textValueUntilStart.endsWith(valueToWork)) {
        textarea.value = textValueUntilStart.substr(0, start - valueToWork.length) + textValueFromStart;
        textarea.selectionStart = textarea.selectionEnd = start - valueToWork.length;

        textChanged = true;
      }
    } else {
      textarea.value = textValueUntilStart + valueToWork + textValueFromStart;
      textarea.selectionStart = textarea.selectionEnd = start + valueToWork.length;

      textChanged = true;
    }

    event.preventDefault();

    if (textChanged) {
      this.showHighlighedCode$.next(false);
    }

    return false;
  }
}
