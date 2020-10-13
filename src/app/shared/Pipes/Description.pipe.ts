import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const description = args.provideWhat.length > 130 ? args.provideWhat.substring(0, 130) : args.provideWhat;
    return description;
  }
}
