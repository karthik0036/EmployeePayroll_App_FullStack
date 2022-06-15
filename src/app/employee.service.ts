import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
      
  export class EmployeeService {

    private baseUrl: string = "http://localhost:8080/employeePayrollservice";

  //Injected required dependencies
  //Injected HttpClient to perform HTTP requests
  constructor(private httpClient: HttpClient) {}

  //Used HttpClient service class to perform Http request to post data on given url
  addEmployeeData(employee: any): Observable<any> {
      return this.httpClient.post(this.baseUrl+"/create", employee);
    }

    //Used HttpClient service class  to perform Http request to get all data on given url
  getEmployeeData(): Observable<any> {
      return this.httpClient.get(this.baseUrl + "/get");
  }
   
 //Used HttpClient service class performs Http request to delete data for particular id on given url
  deleteEmployeeData(id: any): Observable<any> {
    return this.httpClient.delete(this.baseUrl+"/delete/"+id);
  }

     //Used HttpClient service class performs Http request to get data for particular id on given url
  getEmployeeByID(id:number){
    return this.httpClient.get(this.baseUrl + "/get/"+ id);
  }
  //Used HttpClient service class performs Http request to put data for particular id on given url
  updateEmployeeData(id: number, employee: any) {
    return this.httpClient.put(this.baseUrl+"/update/"+id,employee);
  }
  
  }