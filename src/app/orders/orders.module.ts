import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(
            [
                {
                    path:'',
                    component:OrdersComponent
                }
            ])
    ],
    declarations: [OrdersComponent]
})
export class OrdersModule { }
