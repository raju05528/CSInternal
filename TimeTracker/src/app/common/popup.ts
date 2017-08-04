import { Component, Input, EventEmitter } from '@angular/core';

declare var jQuery;

@Component({
    selector: 'epopup',    
    template: `
       <div class="modal fade iko_edit_user_model iko_edit_personal_model" [ngClass]="clsLoad" *ngIf="show" id="popupModal" [style.display]="display" (click)="clicked($event)">
            <div class="modal-dialog" [ngStyle]="{'max-width': width}">
             <div class="modal-content">
                <header class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" (click)="hidePopup()">&times;</button> 
                    <h4 class="modal-title text-xs-center fw-bold popup-title">{{title}}</h4>         
                </header>
                <div class="">
                    <ng-content></ng-content>
                </div>	
                </div>
            </div>
        </div>
  `,
    inputs: ['title', 'bodyClose','width'],
    outputs: ['popupClosed']
})
export class EPopup {

    display: string = 'none';
    bodyClose: boolean = false;
    title: string = '';
    show: boolean = true;
    width: string;
    clsLoad: string = '';
    popupClosed = new EventEmitter();

    showPopup() {
        this.display = 'block';

        jQuery('<div id="popupback" class="modal-backdrop fade in"/>').appendTo('body');
        jQuery('body').addClass('modal-open');

        setTimeout(() => {
            this.clsLoad = 'in';
        });
        this.show = true;
    }

    hidePopup() {
        this.clsLoad = '';
        jQuery('body').removeClass('modal-open');
        setTimeout(() => {
            this.display = 'none';
            jQuery('#popupback').remove();
            this.show = false;
            this.popupClosed.emit();
        }, 400);
    }
    clicked(e) {
        if (this.bodyClose && e.target.id == 'popupModal')
            this.hidePopup();
    }
}