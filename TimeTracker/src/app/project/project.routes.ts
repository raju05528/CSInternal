import { Routes, RouterModule } from '@angular/router';
import { NgModule }            from '@angular/core';
import { ProjectInfo } from '../project/project-info/project-info.component';
import { Project } from './project';
export const PROJECT_ROUTES: Routes = [
	{
		path: 'project',
		component: Project,
		children: [
			{ path: '', component: ProjectInfo }
		]
	},
];

//export const PROJECT_ROUTES = RouterModule.forChild(routes);