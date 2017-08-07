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
   countries: any  = [];
   weeks:any=[];
   days:any=[];
   weeklyTimeEntry:any=[
     {
       'Mon':'',
       'Tue':'',
       'Wed':'',
       'Thur':'',
       'Friday':'',
       'Sat':'',
       'Sun':''       
     }
   ];
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
      }

    getWeeksList() {
     // Since no month has fewer than 28 days  
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
        this.days.push(moment(weekStart).add(i, 'days').format("Do ddd, MMM"));
    };
    return this.days;
  }
 
  getTimeEntryByWeek(msiId,startDate){
      //get all time en
  }
  
  addTimeSheet(){
    this.weeklyTimeEntry.push({

    });
  }
}
