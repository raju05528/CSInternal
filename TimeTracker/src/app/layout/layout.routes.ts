import { Routes, RouterModule } from '@angular/router';
import { Layout } from './layout.component';
import { Home } from '../home/home/home.component';
import { ProjectInfo } from '../project/project-info/project-info.component';
const routes: Routes = [
  {
    path: ''
    , component: Layout
    ,
    children: [
      { path: '', component: Home },
      { path: 'project', component: ProjectInfo }
    ]
  }
];

export const ROUTES = RouterModule.forChild(routes);
