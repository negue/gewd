import { ErrorHandler, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ErrorInterface {
  name: string;
  message: string;
  stack: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  public error$ = new BehaviorSubject<ErrorInterface>(null);

  constructor() {
    window.addEventListener('error', ev => {
      this.error$.next({
        name: ev.error.name,
        message: ev.error.message,
        stack: ev.error.stack
      });
    });
  }

  handleError (error: Error): void {
    this.error$.next({
      name: error.name,
      message: error.message,
      stack: error.stack
    });
  }
}
