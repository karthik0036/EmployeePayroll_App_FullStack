import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../../employee.service';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent implements OnInit {

  employeeDetails: any;
  employeeCount: number = 10;

  //Injected required dependencies
  constructor(private router:Router, private service: EmployeeService){}

  
//When component gets initialized all properties ngOnInit() hook gets called
  ngOnInit(): void {  

    this.loadData();
    
  }

  loadData(): void {

    this.service.getEmployeeData().subscribe((response:any)=>{
      this.employeeDetails = response.data;
      this.employeeCount = this.employeeDetails.length;
      console.log(this.employeeDetails);
    });
    
  
  }
  //call deleteEmployeeById method of service to delete employee
   delete(id: number) {
    this.service.deleteEmployeeData(id).subscribe(data=> {
       console.log(data.data);
       this.ngOnInit();      
     });
   }

   //navigates page to update which has form_component to load existing employee record to update
  editById(id:number){
    this.router.navigate(['update',id]);
   }
}
