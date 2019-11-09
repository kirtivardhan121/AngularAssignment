import { ElementRef, Directive, HostBinding, HostListener } from '@angular/core';


@Directive({
    selector : '[custDir]'
})




export class CustomDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.color = 'red';

    }
    @HostBinding('style.backgroundColor') backgroundColor = 'yellow';
    @HostListener('mouseenter') mouseEnterEvent() {
        this.el.nativeElement.style.backgroundColor = 'green';
    }
    @HostListener('mouseleave') mouseLeaveEvent() {
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }
}
