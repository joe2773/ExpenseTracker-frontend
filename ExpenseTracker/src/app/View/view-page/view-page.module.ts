import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPageComponent } from './view-page.component';
import { HttpClientModule } from '@angular/common/http';    
import { ViewSearchResultsModule } from '../view-search-results/view-search-results.module';
import { SearchHeaderModule } from '../search-header/search-header.module';
@NgModule({
  declarations: [
    ViewPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ViewSearchResultsModule,
    SearchHeaderModule
  ],
  exports: [
    ViewPageComponent
  ]
})
export class ViewPageModule { }
