import { Directive, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Directive({
    selector: '[appReadonly]'
})

export class readonlyDirective {
    @Output() readonlyFrom=new EventEmitter<any>()

    @Input() set appReadonly(value: boolean) {
     this.readonlyFrom.emit(value)
    }


    constructor() { }


}