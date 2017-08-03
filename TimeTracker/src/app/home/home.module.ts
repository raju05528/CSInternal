import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Home } from './home/home.component';
import { HOME_ROUTES } from './home.routes';
//import { ProjectModule } from '../project/project.module';
import {LayoutModule} from '../layout/layout.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';
@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , ReactiveFormsModule
    , RouterModule
    , HOME_ROUTES
   // , ProjectModule
    ,LayoutModule
    ,ChartsModule
  ],
  declarations: [
     Home
  ]
})
export class HomeModule { }