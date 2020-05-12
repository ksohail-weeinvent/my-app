import { Router } from '@angular/router';
import { EmployeeDetailComponent } from './../employee-detail/employee-detail.component';
import { DataServiceService } from './../data-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
    selector: 'app-employees-list',
    templateUrl: './employees-list.component.html',
    styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
    selectedEmp: any = '';
    @ViewChild(EmployeeDetailComponent, { static: false }) child: any;
    dataFromChild = '';
    constructor(
        public empList: DataServiceService,
        private router: Router
        ) { }

    ngOnInit() {
    }
    receiveDataFromChild(data: string) {
        this.dataFromChild = data;
    }
}
