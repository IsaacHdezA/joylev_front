import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[clickedOutside]',
  standalone: true
})
export class ClickedOutsideDirective {
  @Output() public atOutsideClick = new EventEmitter();

  constructor(private element: ElementRef) {}

  @HostListener('document:click', [`$event.target`])
  public onClick(target: any) {
    const clickedOutside = this.element.nativeElement.contains(target);

    if(!clickedOutside) this.atOutsideClick.emit(target);
  }
}
