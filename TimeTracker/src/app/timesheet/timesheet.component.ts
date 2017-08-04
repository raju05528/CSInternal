import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../home/home.service";
import { MomentModule } from 'angular2-moment';
import * as moment from 'moment'; 

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.html',
  providers: [ProjectService]
})
export class TimesheetComponent implements OnInit {
  public ddlWeekday: any;
  
   weeklst :any []=[];
    myDate: Date;
    weekEnd:Date;
    weekStart:Date;   

  constructor(private projectService: ProjectService,private mmnt:MomentModule) { 
    this.myDate = new Date();
    
        var now = moment();
        console.log('moment using now :: '+now.calendar(2));
  }

  ngOnInit(): void {
      for(var i=0;i<5;i++){
        var startDay=moment().add(-i, 'weeks').startOf('isoWeek').format('DD/MM/YYYY')
        var endDay=  moment().add(-i, 'weeks').endOf('isoWeek').format('DD/MM/YYYY')
        console.log(startDay+' - '+ endDay);
        this.weeklst.push(startDay+' - '+endDay);
      }
    
  }
      changeWeek(crweek){
        this.ddlWeekday=crweek.value;
      }

}
