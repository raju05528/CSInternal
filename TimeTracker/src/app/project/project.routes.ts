import { Routes, RouterModule } from '@angular/router';
import { NgModule }            from '@angular/core';
import { ProjectInfo } from '../project/project-info/project-info.component';
@NgModule({
  imports: [RouterModule.forChild([
     {
        path : '',
        component : ProjectInfo
      }      
      
  ])],
  exports : [RouterModule]
})
export class PROJECT_ROUTES{}

//export const PROJECT_ROUTES = RouterModule.forChild(routes);