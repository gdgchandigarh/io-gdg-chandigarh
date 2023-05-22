import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrapAfterThreeWords'
})
export class WrapAfterThreeWordsPipe implements PipeTransform {
  transform(value: string): string {
    const words = value.split(' ');
    let wrappedText = '';

    for (let i = 0; i < words.length; i += 3) {
      const line = words.slice(i, i + 3).join(' ');
      wrappedText += line + '<br>';
    }

    return wrappedText;
  }
}
