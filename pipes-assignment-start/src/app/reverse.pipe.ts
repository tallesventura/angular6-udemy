import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    if (value.length === 0) {
      return value;
    }

    let result = '';
    for (let i = value.length - 1; i >= 0; i--) {
      result = result.concat(value[i]);
    }
    return result;
  }

}
