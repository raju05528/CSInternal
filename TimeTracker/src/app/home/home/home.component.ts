import { Component, ViewEncapsulation, OnInit, ViewChild, Directive } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ProjectService } from '../home.service';
//import { Layout } from '../layout/layout.component';

declare var jQuery: any;

@Component({
  selector: 'home',
  templateUrl: './home.html',
  providers: [ProjectService]
})

@Directive({ selector: 'canvas[baseChart]' })

export class Home implements OnInit {
  
  router: Router;
  private project: any = {};
  public pieChartLabels: string[] = ['Saved', 'Submitted', 'Pending'];
  public pieChartData: number[] = [20, 10, 10];
  public pieChartType: string = 'pie';
  public showWeek = "31/07/207 - 06/08/2017";
  public emplst:any=[];
  constructor(private route: ActivatedRoute
    , private formbuilder: FormBuilder, router: Router, private projectService: ProjectService) {
    this.router = router;    
    var EmpRecords = {
      Recordsets: {},
      Recordset: {},
    }
  }
  public chartColors: any[] = [
    {
      backgroundColor: ['#6bad05', '#f29e00', '#DA1A32']
    }];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  ngOnInit(): void {

  }
  saveProject(): void { }

  onSubmit(): any {
    this.projectService.getAllEmployees().subscribe((data) => {
      //data is your employee list      
      var emprecs = data;
      console.log('---------------Employee details------------------');

      for (var emp in emprecs) {
        if (emp == "recordset") {
          var empparsed = emprecs[emp];
          this.emplst=emprecs[emp];
          console.log('emp object : '+JSON.stringify(this.emplst));
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


}