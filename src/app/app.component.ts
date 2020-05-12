import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'my-app';
    name = 'Kamran';

    changeName(val: any) {
        console.log(val);
        if (val == 0) {
            this.name = '';
        } else {
            this.name = 'Jabir';
        }

    }

}
