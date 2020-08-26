import { ErrorHandler, Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ErrorInterface {
  name: string;
  message: string;
  stack: string;
}

export interface NgErrorConfig {
  zIndex: number;
  ignoreErrors: string[];
}

const DEFAULT_CONFIG: NgErrorConfig = {
  zIndex: 10000,
  ignoreErrors: []
};

export const NG_ERROR_CONFIG_TOKEN = new InjectionToken<NgErrorConfig>('@gewd/ng-utils/NgErrorConfig');

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  public error$ = new BehaviorSubject<ErrorInterface>(null);

  constructor(
    @Optional() @Inject(NG_ERROR_CONFIG_TOKEN)
    public readonly config: NgErrorConfig
  ) {
    this.config = Object.assign({}, DEFAULT_CONFIG, config);

    window.addEventListener('error', ev => {
      this.handleError(ev.error);
    });
  }

  handleError (error: Error): void {
    if (this.config.ignoreErrors.includes(error.name)) {
      return;
    }

    this.error$.next({
      name: error.name,
      message: error.message,
      stack: error.stack
    });
  }
}
