

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ROUTES } from './layout.routes';

import { Layout } from './layout.component';

@NgModule({
  imports: [CommonModule, ROUTES, FormsModule, ReactiveFormsModule],
  declarations: [Layout],
  providers: []
})
export class LayoutModule {
}
