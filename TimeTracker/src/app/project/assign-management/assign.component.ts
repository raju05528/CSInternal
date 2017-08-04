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
  public ddlEmployeeID: any;
  public ddlEmpID: any;
  constructor(private projectService: ProjectService) {
  }
  ngOnInit(): void {
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
    this.projectService.getSelectedEmployees().subscribe((data) => {
      //data is your employee list      
      var emprecs = data;
      console.log('---------------Employee details------------------');

      for (var emp in emprecs) {
        if (emp == "recordset") {
          var empparsed = emprecs[emp];
          this.emplst = emprecs[emp];
          console.log('emp object : ' + JSON.stringify(this.emplst));
          for (var i = 0; i < empparsed.length; i++) {
            console.log('Employee FirstName : ' + empparsed[i].FirstName);
            console.log('Employee LastName : ' + empparsed[i].LastName);
            console.log('Employee EmailID : ' + empparsed[i].EmailID);
            console.log('Employee EmailID : ' + empparsed[i].Employee_Id);
          }
        }
      }
    })

  }
  changeEmployee(emp) {
    this.ddlEmployeeID = emp.value;
    console.log('ddlEmployeeID : ' + this.ddlEmployeeID);
  }


}