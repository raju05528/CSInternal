import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Home } from './home/home.component';
import { HOME_ROUTES } from './home.routes';
import { ProjectModule } from '../project/project.module';
import {LayoutModule} from '../layout/layout.module';
@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , ReactiveFormsModule
    , RouterModule
    , HOME_ROUTES
    , ProjectModule
    ,LayoutModule
  ],
  declarations: [
     Home
  ]
})
export class HomeModule { }