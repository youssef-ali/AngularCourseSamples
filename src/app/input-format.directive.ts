import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  //  @Input('format') format;
    @Input('appInputFormat') format;
 constructor(private el:ElementRef) { }

  @HostListener('blur') onBlur()
  {
    console.log('on Blur');
    let value :string = this.el.nativeElement.value;
   if(this.format == 'upperCase')
   {
    this.el.nativeElement.value = value.toUpperCase();
   }else{
    this.el.nativeElement.value = value.toLowerCase();
   }
  }

}
