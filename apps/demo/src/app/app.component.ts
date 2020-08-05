import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { emojiExampleList } from './example-emoji-list';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
// todo fix nx enforce module boundaries
import { LazyComponent, LazyModuleComponent } from '@gewd/lazy/loader';
import { HttpClient } from '@angular/common/http';


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

  constructor (private cd: ChangeDetectorRef,
               private http: HttpClient) {
  }

  changeIt (textarea: HTMLTextAreaElement, markdown: any) {
    this.markdown$.next(textarea.value);
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
}
