import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataServiceService {

    employees = [{
        "id": 1,
        "name": "Kamran",
        "city": "RawalPindi",
        "gender": "Male",
        "department": "IT",
        "status": "active"
    }, {
        "id": 2,
        "name": "Ismail",
        "city": "Lahore",
        "gender": "Male",
        "department": "CSR",
        "status": "inactive"
    }, {
        "id": 3,
        "name": "Jabir",
        "city": "Islamabad",
        "gender": "Male",
        "department": "Designer",
        "status": "active"
    }];

    constructor() {

    }


}
