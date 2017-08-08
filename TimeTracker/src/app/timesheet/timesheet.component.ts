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
  // totalHours:any=[];
    totalHours: any = {};
    
    
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
        
        
       this.totalHours=
            {'day1hrs': 0,
            'day2hrs': 0,
            'day3hrs': 0,
            'day4hrs': 0,
            'day5hrs': 0,
            'day6hrs': 0,
            'day7hrs': 0} ;
   
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

  calculateWorkHoursForWeek=function(projectHrs){    
    let hrs:any=[];
    var total=0;
        for(var i=1;i<=7;i++)
            {
                if(projectHrs['day'+i+'hrs']!='')
                    {
                        hrs.push(projectHrs['day'+i+'hrs']);
                    }
            }
            hrs.forEach(element => {
                if(total==0){
                        total=element;
                    }else{                      
                      total=this.sumProjectWokrHours(total,element);
                    }
            });
        return total;
  }


  getTotalWrkHrsForProjects= function(projectHrs){
   return this.calculateWorkHoursForWeek(projectHrs);     
  }

  getTotalWeekWorkHours(){
     return this.calculateWorkHoursForWeek(this.totalHours);
  }
  
  sumProjectWokrHours = function(total,dayhrs){
      var hour = 0;
      var minute=0;
      var splitTime1= total.split(':');
      var splitTime2= dayhrs.split(':');
       hour = parseInt(splitTime1[0])+parseInt(splitTime2[0]);
       minute=parseInt(splitTime1[1])+parseInt(splitTime2[1]);
       hour = hour + Math.floor(minute/60);
       minute = minute%60;
       return this.pad(hour)+':'+this.pad(minute);
  }

    pad = function(num) {
    if(num < 10) {
        return "0" + num;
    } else {
        return "" + num;
    }
  }
  
 getTotalByDays = function(day){
    var total = 0;
    //this.totalHours=[];
   // console.log(this.weeklyTimeEntry)
    for(var i = 0; i < this.weeklyTimeEntry.length; i++){
        var weekTime = this.weeklyTimeEntry[i];
        var dayhrs='day'+day+'hrs';  
        if(this.weeklyTimeEntry[i][dayhrs].toString()!='')   
        {  
          if(total!=0) 
             {total=this.addTimes(total,this.weeklyTimeEntry[i][dayhrs].toString());}
          else{
            total=this.weeklyTimeEntry[i][dayhrs].toString();
          }
        }
    }
    this.totalHours['day'+day+'hrs']=total;     
    return total;
 }

  addTimes= function(start,end){
      var time1= start.split(':');
      var time2= end.split(':');
      var theFutureTime = moment().hour(time1[0]).minute(time1[1]).add(time2[0],'hours').add(time2[1],'minutes').format("HH:mm");
     //var totaltime= moment('theFutureTime', 'hh:mm:ss A')
      
      return theFutureTime;

  }
}
