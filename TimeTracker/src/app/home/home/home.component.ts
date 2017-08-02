import { Component, ViewEncapsulation, OnInit, ViewChild, Directive } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { NgClass } from '@angular/common';
//import { Layout } from '../layout/layout.component';

declare var jQuery: any;

@Component({
    selector: 'home',
    templateUrl: './home.html'
})

@Directive({selector: 'canvas[baseChart]'})

export class Home implements OnInit {
    router: Router;
    private project: any = {};
    public pieChartLabels:string[] = ['Saved', 'Submitted', 'Pending'];
    public pieChartData:number[] = [20, 10, 10];
    public pieChartType:string = 'pie';
    public showWeek="31/07/207 - 06/08/2017";
    constructor(private route: ActivatedRoute
        , private formbuilder: FormBuilder, router: Router) {
        this.router = router;

    }
   public chartColors: any[] = [
      { 
        backgroundColor:['#6bad05', '#f29e00', '#DA1A32'] 
      }];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
    ngOnInit(): void {      
      
    }
    saveProject(): void {}
}