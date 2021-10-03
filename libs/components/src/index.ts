import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class DestroySubjectClass implements OnDestroy {
  protected destroy$ = new Subject<void>();

  ngOnDestroy (): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
