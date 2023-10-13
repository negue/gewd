// Code based on https://github.com/pauldraper/neo-observable-input

import { Observable, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

class ObservableValue<T> {
  constructor(
    private readonly _subject: Subject<T>,
    private readonly _value: () => T
  ) {}

  onChanges() {
    this._subject.next(this._value());
  }
}

export class ValueObserver {
  private readonly _inputs: ObservableValue<any>[] = [];

  onChanges(): void  {
    for (const input of this._inputs) {
      input.onChanges();
    }
  }

  observe<T>(value: () => T): Observable<T> {
    const subject = new ReplaySubject<T>(1);
    this._inputs.push(new ObservableValue(subject, value));
    return subject.pipe(distinctUntilChanged());
  }
}
