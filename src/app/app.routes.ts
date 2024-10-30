import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeComponent } from './pages/employe/employe.component';
import { EmpLeaveComponent } from './pages/emp-leave/emp-leave.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'employee',
                component:EmployeComponent
            },
            {
                path:'leave-request',
                component:EmpLeaveComponent
            }
        ]
    }
];
