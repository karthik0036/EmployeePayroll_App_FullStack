import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DashBoardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '' , component: DashBoardComponent},
  {path: 'addemployee', component: AddEmployeeComponent},
  {path:"update/:id" , component:AddEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
