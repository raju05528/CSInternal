import { Component, EventEmitter, OnInit, ElementRef, Output } from '@angular/core';
import { Router } from '@angular/router';


declare var jQuery: any;

@Component({
  selector: 'layout',
  templateUrl: './layout.html',
  providers: [],
})
export class Layout implements OnInit {
  private countryName: string;
    private name: string = "Anil Kumar";
    private role: string;
    private tab1: boolean = true;
    private tab2: boolean = false;
    private tab3: boolean = false;
    private tab4: boolean = false;
    private tab5: boolean = false;
    private tab6: boolean = false;

    private tabAccess1: boolean = true;
    private tabAccess2: boolean = true;
    private tabAccess3: boolean = true;
    private tabAccess4: boolean = true;
    private tabAccess5: boolean = true;
    private currentTab: string;
    constructor(el: ElementRef,  private router: Router) {
    
  }
    public onTabClicks(index: number) {
        let vm = this;
        vm.tab1 = false;
        vm.tab2 = false;
        vm.tab3 = false;
        vm.tab4 = false;
        vm.tab5 = false;
        vm.tab6 = false;
        if (index == 0) {
            vm.tab1 = true;
            // vm.sharedService.setOption(1);
            vm.router.navigate(['']);
        } else if (index == 1) {
            vm.tab2 = true;
            // vm.sharedService.setOption(2);
            vm.router.navigate(['/project']);
        } else if (index == 2) {
            vm.tab3 = true;
            // vm.sharedService.setOption(3);
            //vm.router.navigate(['/subscriptionplan']);
        } else if (index == 3) {
            vm.tab4 = true;
            // vm.sharedService.setOption(4);
            //vm.router.navigate(['/emergencyservice']);
        } else if (index == 4) {
            vm.tab5 = true;
            // vm.sharedService.setOption(5);
            //vm.router.navigate(['/adminusers']);
        }
        else if (index == 5) {
            vm.tab6 = true;
            // vm.sharedService.setOption(5);
            //vm.router.navigate(['/adminusers']);
        }
    }
  
  logout(): any {
    //this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    
  }
}
