import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { NgClass } from '@angular/common';
//import { Layout } from '../layout/layout.component';

declare var jQuery: any;

@Component({
    selector: 'project-info',
    templateUrl: './project-info.html',
    encapsulation: ViewEncapsulation.None

})
export class ProjectInfo implements OnInit {
    private projectForm: FormGroup;
    router: Router;
    private project: any = {};
    constructor(private route: ActivatedRoute
        , private formbuilder: FormBuilder, router: Router) {
        this.router = router;

    }
    ngOnInit(): void {

        this.projectForm = this.formbuilder.group({
            name: ['', Validators.required],
            projectNote: [''],
            startDateTime:[''],
            endDateTime:['']
        });
      
    }
    saveProject(): void {}
}