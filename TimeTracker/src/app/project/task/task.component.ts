import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
//declare var jQuery: any;

@Component({
    selector: 'task',
    templateUrl: './task.html'

})
export class TaskComponent implements OnInit {
    private title: string = "Add Task";
    private taskForm: FormGroup;
    private task: any = {};
    constructor(private formbuilder: FormBuilder) {

    }
    ngOnInit(): void {
        this.taskForm = this.formbuilder.group({
            taskName: ['', Validators.required],
            status: [''],
            taskDescription: ['']
        });
    }

    protected AddTask(taskModelDialog) {
        taskModelDialog.showPopup();
    }

    protected saveTask(taskModelDialog) {
        taskModelDialog.hidePopup();
    }
}