import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMilToKm',
})
export class ConvertMilToKmPipe implements PipeTransform {
  transform(value: any, type: string): any {
    switch (type) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1609.34;
      case 'cm':
        return value * 160934;
      default:
        throw new Error('IValid Value');
    }
  }
}
