import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ProjectModule } from './project/project.module';
import { HomeModule } from './home/home.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    ProjectModule,
    HomeModule,
    RouterModule.forRoot(ROUTES,{ useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
