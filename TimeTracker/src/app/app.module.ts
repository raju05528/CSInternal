import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ProjectModule } from './project/project.module';
import { HomeModule } from './home/home.module';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TestshowModule } from './testshow/testshow.module';
//import { EPopup } from './common/popup';
@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent
    //EPopup
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    ProjectModule,
    HomeModule,
    TestshowModule,    
    RouterModule.forRoot(ROUTES,{ useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
