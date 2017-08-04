import { Component, OnInit } from '@angular/core';
//import { EPopup } from "./common/popup";
//declare var jQuery: any;

@Component({
    selector: 'task',
    templateUrl: './task.html'

})
export class TaskComponent implements OnInit {
    private title:string = "Add Task";
    constructor() {

    }
    ngOnInit(): void {       
      
    }
   
 protected AddTask(taskModelDialog) {
    taskModelDialog.showPopup();
  }
    
}