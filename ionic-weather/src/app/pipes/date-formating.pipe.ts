import { Pipe, PipeTransform } from '@angular/core';
import { attachView } from '@ionic/angular/providers/angular-delegate';

@Pipe({
  name: 'dateFormating'
})
export class DateFormatingPipe implements PipeTransform {

  transform(unixTimestamp: string[]): unknown {
    let a = new Date(+unixTimestamp * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[a.getDay()] + ', ' + a.getDate() + ' ' + months[a.getMonth()] + ' ' + a.getHours() + ':' + a.getMinutes();
  }

}
