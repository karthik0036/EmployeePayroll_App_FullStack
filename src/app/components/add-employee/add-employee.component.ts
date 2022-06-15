import { Component, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { EmployeeModel } from '../../employeeModel';
import { EmployeeService} from '../../employee.service';
import {ActivatedRoute,Router} from '@angular/router'; 

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  nameError: string="";

  employee:EmployeeModel = new EmployeeModel("","","",0,new Date,"","");

  constructor( private service: EmployeeService ,private router: Router, private route: ActivatedRoute){}

  //Getting id from routes snapshot using paramMap for doing update operation
  Id:any=this.route.snapshot.paramMap.get('id');
  

  ngOnInit(): void {
    this.service.getEmployeeByID(this.Id).subscribe((getData:any)=>{
      console.log(getData.data);
      this.employee=getData.data;
    })
  }

  onSubmit(){
    console.log(this.employee)
    this.service.addEmployeeData(this.employee).subscribe((data:any)=>this.router.navigate(['']))
  }

  getVal(value:string){
    // console.log(value);
    this.employee.departments = value.toString();
  }

  onInput($event:any){
    console.log("change Event occured!", $event.data);
    const nameRegexP = RegExp('^[A-Z]{1}[A-Za-z//s]{2,}$');
    if(nameRegexP.test(this.employee.name) ){
      this.nameError="";
      return;
    }
    this.nameError ="Name is Incorrect";
  
  }

   //Calls updateEmployeeData method in service which uses http update method to update data to database using ID aquired from route path
   updateEmployee(){
    console.log(this.employee);
    this.service.updateEmployeeData(this.Id,this.employee).subscribe((data:any)=>this.router.navigate(['']));
    
  }
 

}
