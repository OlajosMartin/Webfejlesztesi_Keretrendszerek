import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let timezone=(new Date(value)).getTimezoneOffset()*60000;
    let currentTime=(new Date(Date.now()-timezone)).toISOString().replace('Z','');
    return currentTime;
  }

}
