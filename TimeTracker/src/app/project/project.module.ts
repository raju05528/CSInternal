import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProjectInfo } from './project-info/project-info.component';
 import { AssignManagementInfo } from './assign-management/assign.component';
 import { TaskComponent } from './task/task.component';
 import { ClientInfo } from './client-info/client-info.component';
 import { EPopup } from '../common/popup';
//import {Layout} from '../layout/layout.component';
//import {LayoutModule} from '../layout/layout.module';

@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , ReactiveFormsModule
        , RouterModule 
    ],
    declarations: [
       ProjectInfo
       ,AssignManagementInfo
       ,TaskComponent
       ,ClientInfo
       , EPopup    
    ]

})
export class ProjectModule { }