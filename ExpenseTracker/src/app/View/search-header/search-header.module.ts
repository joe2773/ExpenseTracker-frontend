import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHeaderComponent } from './search-header.component';


@NgModule({
  declarations: [
      SearchHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      SearchHeaderComponent
  ]
})
export class SearchHeaderModule { }
