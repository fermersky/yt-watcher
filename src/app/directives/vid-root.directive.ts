import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appVidRoot]',
})
export class VidRootDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
