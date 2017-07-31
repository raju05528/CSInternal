import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { NgClass } from '@angular/common';
//import { Layout } from '../layout/layout.component';

declare var jQuery: any;

@Component({
    selector: 'home',
    templateUrl: './home.html',
    encapsulation: ViewEncapsulation.None

})
export class Home implements OnInit {
    router: Router;
    private project: any = {};
    constructor(private route: ActivatedRoute
        , private formbuilder: FormBuilder, router: Router) {
        this.router = router;

    }
    ngOnInit(): void {      
      
    }
    saveProject(): void {}
}