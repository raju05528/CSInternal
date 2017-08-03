import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestshowRoutingModule } from './testshow-routing.module';
import { TestshowComponent } from './testshow.component';
import { DisplayComponent } from './display/display.component';
import { DisplayprojectsComponent } from './displayprojects/displayprojects.component';

@NgModule({
  imports: [
    CommonModule,
    TestshowRoutingModule
  ],
  declarations: [TestshowComponent, DisplayComponent, DisplayprojectsComponent]
})
export class TestshowModule { }
