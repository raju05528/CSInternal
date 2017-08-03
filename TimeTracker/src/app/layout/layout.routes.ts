import { Routes, RouterModule } from '@angular/router';
import { Layout } from './layout.component';
import { Home } from '../home/home/home.component';
import { ProjectInfo } from '../project/project-info/project-info.component';
import { Project } from '../project/project';
import { TimesheetComponent } from '../timesheet/timesheet.component';
const routes: Routes = [
  {
    path: ''
    , component: Layout
    ,
    children: [
      { path: '', component: Home },
      { path: 'project', component: ProjectInfo },
      { path: 'timesheet', component: TimesheetComponent }
      
    ]
  }
];

export const ROUTES = RouterModule.forChild(routes);
