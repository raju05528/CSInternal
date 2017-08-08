import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
declare var jQuery: any;

@Component({
    selector: 'client-info',
    templateUrl: './client-info.html'

})
export class ClientInfo implements OnInit {
    private clientInfoForm: FormGroup;
    private clientInfo: any = {};
    private isShow: boolean = false;
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
    onSubmit(): void {
        this.isShow = false;
     }
    SaveNextClientInfo(){
        
    }

}