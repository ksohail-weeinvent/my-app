import { DataServiceService } from './data-service.service';

import { MyDirectiveDirective } from './my-directive/my-directive.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


@NgModule({
    declarations: [
        AppComponent,
        EmployeesListComponent,
        EmployeeDetailComponent,
        MyDirectiveDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot(
            [
                {
                    path: 'orders',
                    loadChildren:
                        () => import('./orders/orders.module')
                            .then(mod => mod.OrdersModule)
                },
                {
                    path: 'products',
                    loadChildren:
                        () => import('./products/products.module')
                            .then(mod => mod.ProductsModule)
                },{
                    path: 'products',
                    loadChildren:
                        () => import('./products/products.module')
                            .then(mod => mod.ProductsModule),
                            outlet : 'other'
                }
                , {

                    path: '',
                    component: EmployeesListComponent
                }
            ]
        )
    ],
   // providers: [DataServiceService],
    providers: [
         {
             provide: DataServiceService,
             useFactory: DataServiceProviderFactory,
             deps:[]
         }
    ],
   // providers:[],
    exports: [RouterModule],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

   // constructor(public empList: DataServiceService   ) { }
}
export function DataServiceProviderFactory() {
    return new DataServiceService();
}
