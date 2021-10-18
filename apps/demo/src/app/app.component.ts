import { ChangeDetectorRef, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
// todo fix nx enforce module boundaries
import { LazyModuleComponent } from '@gewd/lazy/loader';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

// TODO Splitup each panel functions/vars into its own component

@Component({
  selector: 'gewd-utils-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  markDownReadmeMD$ = this.http.get('./assets/readme/markdown/README.md', {
    responseType: 'text'
  });

  ngErrorOverlay$ = this.http.get('./assets/ng-error-overlay.md', {
    responseType: 'text'
  });

  matUtilsReadmeMD$ = this.http.get('./assets/readme/mat-utils/README.md', {
    responseType: 'text'
  });


  public currentPrismExample: string;

  public editorLanguage$ = new BehaviorSubject('');
  public editorExample$ = new BehaviorSubject('');

  aForm =  new FormBuilder().group({'editor': ''});

  constructor (private cd: ChangeDetectorRef,
               private http: HttpClient) {
  }

  setLazyPortalModuleComp (lazyModuleComponent: LazyModuleComponent): void  {
    lazyModuleComponent.moduleAlias = 'portal-module';
    lazyModuleComponent.component = 'PortalModuleComp';
    lazyModuleComponent.setComponent();
  }

  makeError (): void  {
    let errorSource: any;

    errorSource.subString();
  }

  updateValueChanged ($event: string): void  {
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

  openedEditorPanel (): void  {
    if (!this.currentPrismExample) {
      this.updateValueChanged('empty');
    }
  }

}
