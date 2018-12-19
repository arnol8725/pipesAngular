import { Pipe, PipeTransform, ValueProvider } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activar: boolean=true): any {

    let copia : string = value;
    if (activar){
      console.log('ENTRO');
      value="";
        for(let i=0 ;i< copia.length;i++ ){              
              value=value+"*";
              console.log(value);
        }
    }
    return value;
  }

}
