import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, scan, takeUntil } from 'rxjs/operators';
import { CssPropsService } from '@gewd/ng-utils/css-props';

@Component({
  selector: 'ng-error',
  templateUrl: './ng-error.component.html',
  styleUrls: ['./ng-error.component.scss']
})
export class NgErrorComponent implements OnInit, OnDestroy {

  public showIndex = 0;

  public visible$ = new BehaviorSubject(false);

  public errors$ = this.errorService.error$.pipe(
    // add all errors to an array
    // only keep the newest 10
    scan((a, c) => [c, ...a].slice(0, 10), []),
    map(value => value.filter(v => !!v))
  );

  private _destroy$ = new Subject();

  constructor(private errorService: ErrorHandlerService,
              private cd: ChangeDetectorRef,
              private cssProps: CssPropsService,
              private element: ElementRef<HTMLElement>) {
    cssProps.updateElementVars(element.nativeElement, {
      '--overlay-zindex': errorService.config.zIndex
    })
  }

  ngOnInit(): void {
    this.errors$.pipe(
      takeUntil(this._destroy$)
    ).subscribe(value => {
      this.visible$.next(value.length > 0);
      this.cd.markForCheck();
    })
  }

  ngOnDestroy (): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  hide () {
    this.visible$.next(false);
  }
}
