import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestshowComponent } from './testshow.component';
import { DisplayComponent } from './display/display.component';
import { DisplayprojectsComponent } from './displayprojects/displayprojects.component';

const routes: Routes = [

  {
    path:'testshow',
  component:TestshowComponent,
    children:[
      {path:'display',component:DisplayComponent},
      {path:'displayprojects',component:DisplayprojectsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestshowRoutingModule { }
