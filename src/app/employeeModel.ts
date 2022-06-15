export class EmployeeModel {
     name: string = "" ;
     departments: string = "";
     gender: string = "";
     salary: number = 3000;
     startDate: Date;
     note: string = "";
     profilePic: string ="";
     constructor(name: string, departments:string, gender: string,salary: number,startDate:Date,note:string,profilePic: string){
         this.name=name;
         this.departments=departments;
         this.gender=gender;
         this.salary=salary;
         this.startDate=startDate;
         this.note=note;
         this.profilePic=profilePic;
        }
    

}