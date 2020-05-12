import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';


@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    scorsObservable: Observable<any>
    message = ''
    message2 = ''
    subscription1: any
    subscription2: any
    a = [1, 2, 3, 4, 5, 6, 7]
    aObservable: Observable<any>

    constructor() { }

    ngOnInit() {
        this.aObservable = of(this.a)
        this.scorsObservable = new Observable(channel => {
            channel.next('I am starting')
            channel.next(100)
            channel.next(200)
            let i = 1
            setInterval(() => {
                channel.next(i++)
            }, 1000)
        })
    }

    subscribe() {
        this.subscription1 = this.aObservable.subscribe(
            (data: any) => {
                this.message = data;
            },
            (error: any) => {
                alert('ERROR')
            },
            () => {
                alert('Scors observable completedx')
            }
        )
    }

    subscribe2() {
        this.subscription2 = this.scorsObservable.subscribe(
            (data: any) => {
                this.message2 = data;
            },
            (error: any) => {
                alert('ERROR')
            },
            () => {
                alert('Scors observable completed')
            }
        )
    }

}
