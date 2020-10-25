import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { emojiExampleList } from './example-emoji-list';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { debounceTime, take } from 'rxjs/operators';
// todo fix nx enforce module boundaries
import { LazyComponent, LazyModuleComponent } from '@gewd/lazy/loader';
import { HttpClient } from '@angular/common/http';

// TODO Splitup each panel functions/vars into its own component

@Component({
  selector: 'gewd-utils-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private markdown$ = new Subject();
  private subscription: Subscription;

  readmeMD$ = this.http.get('README.md', {
    responseType: 'text'
  });

  markDownReadmeMD$ = this.http.get('./assets/readme/markdown/README.md', {
    responseType: 'text'
  });
  exampleMD$ = this.http.get('./assets/example.md', {
    responseType: 'text'
  });

  ngErrorOverlay$ = this.http.get('./assets/ng-error-overlay.md', {
    responseType: 'text'
  });

  emojiList = emojiExampleList;

  @ViewChild('markdown', {static: true})
  markdown: any;

  public outputLog = [];
  public outputBinding = {
    outputTest: (e) => this.addLogEntry(e)
  };
  public currentPrismExample: string;

  public editorLanguage$ = new BehaviorSubject('');
  public editorExample$ = new BehaviorSubject('');

  constructor (private cd: ChangeDetectorRef,
               private http: HttpClient) {
  }

  changeIt (newMarkdown: string, markdown: any) {
    this.markdown$.next(newMarkdown);
  }

  ngOnDestroy (): void {
    this.subscription.unsubscribe();
  }

  ngOnInit (): void {
    this.subscription = this.markdown$
      .pipe(
        debounceTime(350)
      )
      .subscribe(value => {
        this.markdown.markdown = value;
      })
  }

  setLazyComp (lazyComponent: LazyComponent) {
    lazyComponent.component = 'test-comp';
    lazyComponent.setComponent();
    this.cd.markForCheck();
  }

  setLazyModuleComp (lazyModuleComponent: LazyModuleComponent) {
    lazyModuleComponent.moduleAlias = 'test-module';
    lazyModuleComponent.component = 'MyModuleComp';
    lazyModuleComponent.setComponent();
  }


  setLazyPortalModuleComp (lazyModuleComponent: LazyModuleComponent) {
    lazyModuleComponent.moduleAlias = 'portal-module';
    lazyModuleComponent.component = 'PortalModuleComp';
    lazyModuleComponent.setComponent();
  }

  addLogEntry (e) {
    this.outputLog.push(e);
  }

  makeError () {
    let errorSource: any;

    errorSource.subString();
  }

  updateValueChanged ($event: string) {
    console.info({ $event});

    this.currentPrismExample = $event;
    switch($event ) {
      case 'ts_example':
      {
        this.editorLanguage$.next('ts');

        this.editorExample$.next(`
import { DynamicLoaderRegistry } from '@gewd/lazy/registry';
import { Lazy } from '@gewd/lazy/utils';

DynamicLoaderRegistry.LazyComponents = {
  'test-comp': new Lazy<any>(() => import('./lazy-wrapper/test-comp'))
};

DynamicLoaderRegistry.LazyModuleComponents = {
  'test-module': {
    load: new Lazy<any>(
      () => import(/* webpackChunkName: "lazy-test-module" */ './lazy-wrapper/test-module-comp')
      .then(({TestModule}) => TestModule)
    )
  },
  'portal-module': {
    load: new Lazy<any>(
      () => import(/* webpackChunkName: "lazy-portal-module" */ './lazy-wrapper/lazy-portal-source')
        .then(({PortalModule}) => PortalModule)
    )
  },
};
        `.trim())
        break;
      }
      case 'readme_md': {
        this.editorLanguage$.next('markdown');

        this.markDownReadmeMD$.pipe(
          take(1)
        ).subscribe(value => {
          this.editorExample$.next(value);
        })

        break;
      }
      default: {
        this.editorExample$.next('');

        break;
      }
    }
  }

  openedEditorPanel () {
    if (!this.currentPrismExample) {
      this.updateValueChanged('empty');
    }
  }
}
