import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../home/home.service";

declare var jQuery: any;

@Component({
  selector: 'assign-management',
  templateUrl: './assign-management.html',
  providers: [ProjectService]
})
export class AssignManagementInfo implements OnInit {
  public emplst: any = [];
  public assgnmemlst:any=[];
  public ddlEmployeeID: any;
  public ddlEmployeeName:any;
  public ddlEmpID: any;
  constructor(private projectService: ProjectService) {
  }
  ngOnInit(): void {
    this.GetAllAssignedEmployees();
  }

  GetAllAssignedEmployees(){
        this.projectService.getAllEmployees().subscribe((data) => {
      //data is your employee list      
      var emprecs = data;
      console.log('---------------Employee details------------------');
      for (var emp in emprecs) {
        if (emp == "recordset") {
          var empparsed = emprecs[emp];
          this.emplst = emprecs[emp];
          for (var i = 0; i < empparsed.length; i++) {
            console.log('Employee FirstName : ' + empparsed[i].FirstName);
            console.log('Employee LastName : ' + empparsed[i].LastName);
            console.log('Employee EmailID : ' + empparsed[i].EmailID);
          }
        }
      }
    })
  }
  AddEmployee(ddlEmpID): void {

    console.log('ddlEmployeeID from ang2: ' + ddlEmpID);
    //let EmployeeID= jQuery("#ddlEmp").val();
    //console.log('Employee_ID from ang2: '+EmployeeID);
    this.projectService.getSelectedEmployees(ddlEmpID).subscribe((resdata) => { 
      //data is your employee list      
      var emprecs = resdata;
      console.log('---------------Employee details------------------');
      console.log('getSelectedEmployees response data : '+JSON.stringify(emprecs));
        for (var emp in emprecs) {
        if (emp == "recordset") {
          var empparsed = emprecs[emp];
          this.assgnmemlst = emprecs[emp];
          console.log('getSelectedEmployees response data : '+JSON.stringify(this.assgnmemlst));
          for (var i = 0; i < empparsed.length; i++) {
            console.log('Employee FirstName : ' + empparsed[i].EmployeeName);            
          }
        }
      }
      })

  }
  changeEmployee(emp) {
    console.log('emp : ' + JSON.stringify(emp));
    this.ddlEmployeeID = emp.Employee_Id;
    this.ddlEmployeeName=emp.EmployeeName;
    console.log('ddlEmployeeID : ' + this.ddlEmployeeID);
    console.log('ddlEmployeeID : ' + this.ddlEmployeeName);
  }
}