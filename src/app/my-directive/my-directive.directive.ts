import { DataServiceService } from './../data-service.service';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[myDirective]'
})

export class MyDirectiveDirective implements OnInit {
    @Input() index: any;
    constructor(private element: ElementRef, private data: DataServiceService) { }

    ngOnInit() {
        const emp = this.data.employees[this.index]
        if (emp.status === 'active') {
            this.element.nativeElement.setAttribute('style', 'color: blue');
        } else {
            this.element.nativeElement.setAttribute('style', 'color: red');
        }
    }
}
