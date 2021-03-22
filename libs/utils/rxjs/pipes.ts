// Original Code from https://angularbites.com/async-rendering-with-a-single-rx-operator/

import { animationFrameScheduler, from, Observable, of, scheduled } from 'rxjs';
import { bufferCount, concatMap, delay, mergeMap, scan, skip, startWith, takeUntil, tap } from 'rxjs/operators';

export function lazyArray<T>(
  delayMs = 0,
  concurrency = 2
) {
  let isFirstEmission = true;

  return (source$: Observable<T[]>) => {
    return source$.pipe(
      mergeMap((items) => {
        if (!isFirstEmission) {
          return of(items);
        }

        const items$ = from(items);

        return items$.pipe(
          bufferCount(concurrency),
          concatMap((value, index) => {
            const delayed = delay(index * delayMs);

            return scheduled(of(value), animationFrameScheduler).pipe(delayed);
          }),
          scan((acc: T[], steps: T[]) => {
            return [ ...acc, ...steps ];
          }, []),
          tap((scannedItems: T[]) => {
            const scanDidComplete = scannedItems.length === items.length;

            if (scanDidComplete) {
              isFirstEmission = false;
            }
          }),
          startWith([]), // if the source has no values nothing would be returned
          takeUntil(source$.pipe(
            skip(1) // take until the source changes to prevent multiple results
          ))
        );
      }),
    );
  };
}

export function consoleInfo(name: string) {
  return tap(
    value => {
      console.info(name, value)
    }
  );
}
