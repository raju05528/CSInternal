import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { NgClass } from '@angular/common';
//import { Layout } from '../layout/layout.component';
import { AssignManagementInfo } from '../assign-management/assign.component';
import { ProjectService } from "../../home/home.service";
declare var jQuery: any;

@Component({
    selector: 'project-info',
    templateUrl: './project-info.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ProjectService]

})
export class ProjectInfo implements OnInit {
    private projectForm: FormGroup;
    router: Router;
    private isShow: boolean = true;
    private isShowProject: boolean = false;
    private project: any = {};
    ddlStatus: any;
    ddlType: any;

    private tab1: boolean = true;
    private tab2: boolean = false;
    private tab3: boolean = false;
    private tab4: boolean = false;
    private tab5: boolean = false;
    private tab6: boolean = false;

    constructor(private route: ActivatedRoute
        , private formbuilder: FormBuilder, router: Router) {
        this.router = router;

    }
    ngOnInit(): void {

        this.projectForm = this.formbuilder.group({
            name: ['', Validators.required],
            status: [''],
            type: [''],
            projectNote: [''],
            startDate: [''],
            endDate: [''],
            manager: ['']
        });

    }

    AddProject(): void {
        this.isShow = false;
        this.isShowProject = true;
    }

    public onTabClick(index: number) {
        let vm = this;
        vm.tab1 = false;
        vm.tab2 = false;
        vm.tab3 = false;
        vm.tab4 = false;
        vm.tab5 = false;
        vm.tab6 = false;
        if (index == 0) {
            vm.tab1 = true;
        } else if (index == 1) {
            vm.tab2 = true;
            vm.isShowProject = false;
        } else if (index == 2) {
            vm.tab3 = true;
            vm.isShowProject = false;
        } else if (index == 3) {
            vm.tab4 = true;
            vm.isShowProject = false;
        }
    }
    ChangeStatus(statusVal) {
        console.log('before:' + statusVal)
        this.ddlStatus = statusVal;
        console.log('after:' + this.ddlStatus)
    }

    ChangeType(typeVal) {
        this.ddlType = typeVal;
    }

    SaveNextProject(): void {
        this.project = {
            'projectId': '0',
            'name': this.projectForm.value.name,
            'status': this.projectForm.value.status,
            'manager': this.projectForm.value.manager,
            'type': this.projectForm.value.type,
            'startDate': this.projectForm.value.startDate,
            'endDate': this.projectForm.value.endDate,
            'projectNote': this.projectForm.value.projectNote

        }
        this.tab1 = false;
        this.tab2 = true;
        // this.isShowProject = false;
    }
    BackToProject() {
        this.tab1 = true;
        this.tab2 = false;
    }
}