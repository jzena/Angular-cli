import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {
    let result = "";

    if (activar) {      
      for (var i = 0; i < value.length; i++) {        
        result += "*";
      }
    }
    else {
      result = value;
    }
    return result;
  }

}
