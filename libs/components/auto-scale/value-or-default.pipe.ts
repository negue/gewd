import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueOrDefault'
})
export class ValueOrDefaultPipe implements PipeTransform {

  transform(value: number, defaultValue: number): number {
    if (!isFinite(value)) {
      return defaultValue;
    }
    return value;
  }

}
