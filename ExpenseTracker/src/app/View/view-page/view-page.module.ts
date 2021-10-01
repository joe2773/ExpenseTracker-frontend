import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPageComponent } from './view-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ViewPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ViewPageComponent
  ]
})
export class ViewPageModule { }
