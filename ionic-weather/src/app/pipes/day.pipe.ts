import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {
  transform(value: string): unknown {
    let a = new Date( +value * 1000 );
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sta']
    return days[a.getDay()];
  }
}
