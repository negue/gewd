import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ng-error',
  templateUrl: './ng-error.component.html',
  styleUrls: ['./ng-error.component.scss']
})
export class NgErrorComponent implements OnInit, OnDestroy {

  public error$ = this.errorService.error$;

  private _destroy$ = new Subject();

  constructor(private errorService: ErrorHandlerService,
              private cd: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.error$.pipe(
      takeUntil(this._destroy$)
    ).subscribe(value => {
      this.cd.markForCheck();
    })
  }

  ngOnDestroy (): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  hide () {
    this.error$.next(null);
  }
}
