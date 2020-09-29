import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const description = args.description.length > 230 ? args.description.substring(0, 230) : args.description;
    return description;
  }
}
