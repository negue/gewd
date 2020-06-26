import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { emojiExampleList } from './example-emoji-list';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, take, tap } from 'rxjs/operators';
// todo fix nx enforce module boundaries
import { LazyComponent, LazyModuleComponent } from '@gewd/lazy/loader';
import { HttpClient } from '@angular/common/http';
import { ExtendedComponentRegistry } from '@gewd/markdown/extended';
import { TestCompHolderComponent } from './test-comp-holder/test-comp-holder.component';
import { XkcdComponent } from './xkcd/xkcd.component';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';

@Component({
  selector: 'gewd-utils-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private markdown$ = new Subject();
  private subscription: Subscription;
  private subscription2: Subscription;


  markdownExtended$ = new Subject();

  readmeMD$ = this.http.get('README.md', {
    responseType: 'text',
  });
  exampleMD$ = this.http
    .get('./assets/example.md', {
      responseType: 'text',
    })
    .pipe(tap((md) => this.markdown$.next(md)));

  emojiList = emojiExampleList;

  @ViewChild('markdown', { static: true })
  markdown: any;

  @ViewChild('markdownExtended', { static: true })
  markdownExtended: any;


  public outputLog = [];
  public outputBinding = {
    outputTest: (e) => this.addLogEntry(e),
  };
  components: ExtendedComponentRegistry = {
    testcomp: {
      component: TestCompHolderComponent,
      allowProps: ['testprop'],
    },
    xkcd: {
      component: XkcdComponent,
      allowProps: [],
    },
    'chuck-norris': {
      component: ChuckNorrisComponent,
      allowProps: [],
    },
  };

  constructor(private cd: ChangeDetectorRef,
              private http: HttpClient) {
    this.http
    .get('./assets/extended.md', {
      responseType: 'text',
    })
    .pipe(
      take(1)
    ).subscribe(value => {
      this.markdownExtended$.next(value);
    });
  }

  changeIt(textarea: HTMLTextAreaElement, markdown: any) {
    this.markdown$.next(textarea.value);
  }

  changeItExtended(textarea: HTMLTextAreaElement, markdown: any) {
    this.markdownExtended$.next(textarea.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.markdown$
      .pipe(debounceTime(350))
      .subscribe((value) => {
        this.markdown.markdown = value;
      });

    this.subscription2 = this.markdownExtended$
      .pipe(debounceTime(350))
      .subscribe((value) => {
        this.markdownExtended.markdown = value;
      });
  }

  setLazyComp(lazyComponent: LazyComponent) {
    lazyComponent.component = 'test-comp';
    lazyComponent.setComponent();
    this.cd.markForCheck();
  }

  setLazyModuleComp(lazyModuleComponent: LazyModuleComponent) {
    lazyModuleComponent.moduleAlias = 'test-module';
    lazyModuleComponent.component = 'MyModuleComp';
    lazyModuleComponent.setComponent();
  }

  setLazyPortalModuleComp(lazyModuleComponent: LazyModuleComponent) {
    lazyModuleComponent.moduleAlias = 'portal-module';
    lazyModuleComponent.component = 'PortalModuleComp';
    lazyModuleComponent.setComponent();
  }

  addLogEntry(e) {
    this.outputLog.push(e);
  }
}
