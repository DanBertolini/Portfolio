import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linesManager'
})
export class LinesManagerPipe implements PipeTransform {

  transform(value: string, lines: number, lenght: number): any {
    let finalValue = "";
    value = value.replace(/\n/, "").replace(/\s\s+/g, ' ');
    for (let i = 0; i < lines; i++) {
      finalValue += value.substring(i * lenght, (i + 1) * lenght);
      if(finalValue.length >= value.length){
        break;
      }

      if (i == (lines - 1)) {
        finalValue += "...";
      } else if (i < (lines - 1)){
        finalValue += "\n";
      }

    }

    return finalValue;
  }

}
