import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @Input()
  defaultColor: string = "yellow";

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    this.elRef.nativeElement.style.backgroundColor = this.defaultColor;
    this.elRef.nativeElement.style.color = "black";
  }

  @HostListener('mouseenter')
  onMouseOver() {
    this.elRef.nativeElement.style.fontSize = "2em";
    this.elRef.nativeElement.style.backgroundColor = "pink";
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elRef.nativeElement.style.fontSize = "1em";
    this.elRef.nativeElement.style.backgroundColor = this.defaultColor;

  }
}
