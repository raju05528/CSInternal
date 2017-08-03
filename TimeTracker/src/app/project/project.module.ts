import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProjectInfo } from './project-info/project-info.component';
 import { AssignManagementInfo } from './assign-management/assign.component';
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
    ]

})
export class ProjectModule { }