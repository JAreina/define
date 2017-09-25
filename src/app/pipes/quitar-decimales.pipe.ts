import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quitarDecimales'
})
export class QuitarDecimalesPipe implements PipeTransform {

  transform(x: any, args?: any): any {


    x = Math.ceil(x);
    return x;
  }

}
