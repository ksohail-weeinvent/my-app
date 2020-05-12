import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-employee-detail',
    templateUrl: './employee-detail.component.html',
    styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
    @Input() employee: any;
    @Output() childEmit = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {

        let i = 0;
        setInterval(
            __ => {
                this.childEmit.emit(i++);
            }, 2000
        );
    }
    triggerEvent() {
        this.childEmit.emit('data from child');
    }

    ngOnChanges() {

        console.log('this is change');
    }

}

