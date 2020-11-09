import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { ElementCssService } from '@gewd/ng-utils/css-props';
import { HighlightService } from './highlight.service';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { MorphdomService } from '@gewd/ng-utils/morphdom';
import { handleTab, HandleTabResponse } from './editor.functions';
import { ALL_CHARS_REGEX, IGNORE_KEY_EVENTS, KEY_TAB } from './editor.keys';


@Component({
  selector: 'gewd-prism-editor',
  templateUrl: './highlight-editor.component.html',
  styleUrls: ['./highlight-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ElementCssService
  ]
})
export class HighlightEditorComponent implements OnInit, OnChanges, OnDestroy {

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

  @Output()
  public value$ = new BehaviorSubject(this.value);
  public language$ = new BehaviorSubject(this.language);
  public debounce$ = new BehaviorSubject(this.debounceTime);

  public showHighlighedCode$ = new BehaviorSubject(false);

  @Input()
  public allCharsRegex = ALL_CHARS_REGEX;

  @ViewChild('textarea')
  public textarea: ElementRef<HTMLTextAreaElement>;

  @ViewChild('highlightArea')
  public highlightArea: ElementRef<HTMLPreElement>;

  @Output()
  focussed$ = new EventEmitter();

  private lastKeyTriggered$ = new BehaviorSubject<KeyboardEvent>(null);
  private _destroyed$ = new Subject();

  constructor(private cd: ChangeDetectorRef,
              private cssProps: ElementCssService,
              private prism: HighlightService,
              private ngZone: NgZone,
              private morphService: MorphdomService) {
  }

  ngOnInit(): void {
    this.updateLinesAmount();

    // once the debounceTime changes
    // recreate the observable
    this.debounce$.pipe(
      switchMap(debounceTimeInterval =>  combineLatest([
        this.value$.pipe(
          distinctUntilChanged(),
        ),
        this.language$.pipe(
          distinctUntilChanged()
        ),
        this.lastKeyTriggered$.pipe(
          distinctUntilChanged()
        )
      ]).pipe(
          debounceTime(debounceTimeInterval),
        )
      ),
      takeUntil(this._destroyed$),
    ).subscribe(async ([code, language, lastKeyEvent]) => {
      this.showHighlighedCode$.next(false);

      await this.highlightToPreTag(code, language, lastKeyEvent)

      this.showHighlighedCode$.next(true);

      // incase multiple enters scroll the textarea one off, scroll back up
      // this.textarea.nativeElement.scrollTo(0,0);
    });

    this.value$.pipe(
      takeUntil(this._destroyed$),
      distinctUntilChanged(),
    ).subscribe(value => {
      this.value = value;
      this.changed.emit(value);
    });

    this.highlightToPreTag('\n', null, null);
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  onChange(value: string) {
    this.value$.next(value);

    this.cd.markForCheck();
  }

  private updateLinesAmount () {
    if (!this.value) {
      return;
    }

    const lines = this.value.split('\n').length;

    this.cssProps.updateElementVars({
      '--lines-amount': lines
    });
  }

  ngOnChanges ({ value, language, debounceTime }: SimpleChanges): void {
    if (value) {
      this.value$.next(value.currentValue);
    }

    if (language) {
      this.language$.next(language.currentValue);
    }

    if (debounceTime) {
      this.debounce$.next(debounceTime.currentValue);
    }
  }

  onKeyDown (event: KeyboardEvent, textarea: HTMLTextAreaElement) {
    if (event.key.match(this.allCharsRegex) && !IGNORE_KEY_EVENTS.includes(event.key)) {
      this.showHighlighedCode$.next(false);
    }

    this.value$.next(textarea.value);

    if (event.key === KEY_TAB) {
      const handledTab = handleTab(
        event,
        textarea.value,
        textarea.selectionStart,
        textarea.selectionEnd,
        this.useTabs,
        this.spaceWidth
      );

      this.applyToTextarea(handledTab);

      if (handledTab.textChanged) {
        this.showHighlighedCode$.next(false);
      }
    }


  }

  onKeyUp (event: KeyboardEvent, value: string) {
    this.value$.next(value);
    this.lastKeyTriggered$.next(event);
  }

  private applyToTextarea(result: HandleTabResponse) {
    if (result.textChanged) {
      this.textarea.nativeElement.value =result.newValue;
      this.textarea.nativeElement.selectionStart =result.newSelectionStart;
      this.textarea.nativeElement.selectionEnd =result.newSelectionEnd;
    }
  }

  private async highlightToPreTag(
    codeToHighlight: string,
    language: string,
    lastKeyEvent: KeyboardEvent
  ) {
    if (!codeToHighlight) {
       this.morphService.morphElement(this.highlightArea,
      `<pre>\n</pre>`, {
        childrenOnly: true
      });

      return '';
    }

    const innerHighlighed = await this.prism.highlightCode(codeToHighlight, language);

    let addedBeginNewLine = '', addedEndNewLine = '';

    // somehow if the new html starts with a newline
    // its not added to the element
    if (innerHighlighed.startsWith('\n')) {
      addedBeginNewLine = '\n';
    }

    if (innerHighlighed.endsWith('\n')) {
      addedEndNewLine = '\n';
    }

    this.morphService.morphElement(this.highlightArea,
      `<pre>${addedBeginNewLine}${innerHighlighed}${addedEndNewLine}</pre>`, {
        childrenOnly: true
      });

    if (lastKeyEvent) {
      this.textarea.nativeElement.blur();
      this.textarea.nativeElement.focus();
    }

    return innerHighlighed;
  }
}
