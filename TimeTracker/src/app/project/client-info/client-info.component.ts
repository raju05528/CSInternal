import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
declare var jQuery: any;

@Component({
    selector: 'client-info',
    templateUrl: './client-info.html',
    inputs: ['projectData', 'tab1', 'tab2', 'tab3', 'tab4']
})
export class ClientInfo implements OnInit {
    private clientInfoForm: FormGroup;
    private clientInfo: any = {};
    private isShow: boolean = false;
    private projectData: any;
    private tab1:boolean;
    private tab2:boolean;
    private tab3:boolean;
    private tab4:boolean;

    constructor(private formbuilder: FormBuilder) {

    }
    ngOnInit(): void {
        this.clientInfoForm = this.formbuilder.group({
            companyName: ['', Validators.required],
            workPhone: ['', Validators.required],
            ext: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: [''],
            email: ['', Validators.required]
        });
    }
    onChange(index) {
        if (index == 2)
            this.isShow = true;
        else
            this.isShow = false;
    }
    // onSubmit(): void {
    //     this.isShow = false;
    // }
    SaveNextClientInfo() {
        this.clientInfo = {
            'clientId': '0',
            'companyName': this.clientInfoForm.value.companyName,
            'workPhone': this.clientInfoForm.value.workPhone,
            'ext': this.clientInfoForm.value.ext,
            'firstName': this.clientInfoForm.value.firstName,
            'startDate': this.clientInfoForm.value.startDate,
            'lastName': this.clientInfoForm.value.lastName,
            'email': this.clientInfoForm.value.email
        }        
    }
    BackToClientInfo() {       
    }
}