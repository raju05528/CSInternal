import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../home/home.service";
import { FormsModule }   from '@angular/forms';  
import * as moment from 'moment'; 

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.html',
  providers: [ProjectService]
})


export class TimesheetComponent implements OnInit {
   countries: any  = [];
   weeks:any=[];
   days:any=[];
   currentTimeEntry:any={};
   weeklyTimeEntry:any=[];

   
   listProjects:any=[
                   {
                      'id':'1',
                      'name':'CloudiumTimeSheet' },
                  {
                      'id':'2',
                      'name':'CloudiumLMS' },
       ];
   listActvity:any=[
                  {
                      'id':'1',
                      'name':'Development' },
                  {
                      'id':'2',
                      'name':'Testing' },
   ];
   public maxweeks:number =4;
   currentDate = moment();
   currentWeekStart = this.currentDate.clone().startOf('isoWeek');
    constructor() { 
    }

    ngOnInit() {
       this.getWeeksList();
       this.getDaysInBetweenDays(0);
       this.getTimeEntryByWeek('msi1256',this.formatDate(this.currentWeekStart));
       this.weeklyTimeEntry.push({
            'projectId':'',
            'taskId':'',
            'day1hrs':'2',       
            'day1note':'',       
            'day2hrs':'2',
            'day2note':'',  
            'day3hrs':'2',
            'day3note':'',  
            'day4hrs':'2',
            'day4note':'',  
            'day5hrs':'2',
            'day5note':'',  
            'day6hrs':'2' ,
            'day6note':'',  
            'day7hrs':'2',  
            'day7note':'',
            'tHrsForProject':''
          }
        )
      }

    getWeeksList() {
     
       let currentWeek=this.currentWeekStart;      
       this.weeks.push({startDate : this.formatDate(currentWeek), name : "Current Week" })
       for(var i=0; i<this.maxweeks; i++)
        {             
            let datevalue=this.formatDate(new Date(moment(currentWeek).subtract(1, 'week').startOf('isoWeek').toLocaleString()));
            let dateText=moment(currentWeek).subtract(i, 'week').startOf('isoWeek').format("MMM Do YYYY")+'-'+ moment(currentWeek).subtract(i, 'week').endOf('isoWeek').format("MMM Do YYYY") 
            console.log('datevalue'+datevalue);
            this.weeks.push({startDate : datevalue, name : dateText })
        }
    }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
 }
 
 getDaysInBetweenDays(numWeek){
   console.log('test week number:'+numWeek);
   var weekStart = this.currentDate.clone().subtract(numWeek, 'week').startOf('isoWeek');
   //var weekEnd = this.currentDate.clone().subtract(numWeek, 'week').endOf('isoWeek');
    for (var i = 0; i <= 6; i++) {
        this.days.push(moment(weekStart).add(i, 'days').format("Do MMM, ddd "));
    };
    return this.days;
  }
 
  getTimeEntryByWeek(msiId,startDate){
      //get all time en
  }
  
   addTimeSheet(){
    console.log(this.weeklyTimeEntry );
    this.weeklyTimeEntry.push({
        'projectId':'',
       'taskId':'',
       'day1hrs':'',       
       'day1note':'',       
       'day2hrs':'',
       'day2note':'',  
       'day3hrs':'',
       'day3note':'',  
       'day4hrs':'',
       'day4note':'',  
       'day5hrs':'',
       'day5note':'',  
       'day6hrs':'' ,
       'day6note':'',  
       'day7hrs':'',  
       'day7note':'',
       'tHrsForProject':''
    });

  }
}
