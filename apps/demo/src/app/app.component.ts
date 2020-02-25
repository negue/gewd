import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { emojiExampleList } from './example-emoji-list';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LazyComponent, LazyModuleComponent } from '@gewd/lazy/loader';

const exampleMD = () => fetch('./assets/example.md').then(r => r.text());

@Component({
  selector: 'gewd-utils-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private markdown$ = new Subject();
  private subscription: Subscription;
  private cachedReadmePromise:Promise<string> = null;

  exampleMD = exampleMD();
  emojiList = emojiExampleList;

  @ViewChild('markdown', {static: true})
  markdown: any;

  public outputLog = [];
  public outputBinding = {
    outputTest: (e) => this.addLogEntry(e)
  };

  constructor (private cd: ChangeDetectorRef) {
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

  loadReadme () {
    return this.cachedReadmePromise
      ? this.cachedReadmePromise
      : (this.cachedReadmePromise = fetch('README.md').then(r => r.text()))
  }
}
