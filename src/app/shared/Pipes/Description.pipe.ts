import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const description = args.description.length > 130 ? args.description.substring(0, 130) : args.description;
    return description;
  }
}
