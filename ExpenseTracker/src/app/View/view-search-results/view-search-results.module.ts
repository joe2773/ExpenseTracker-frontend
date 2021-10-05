import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSearchResultsComponent } from './view-search-results.component';
import { ViewTransactionCardModule } from '../view-transaction-card/view-transaction-card.module';

@NgModule({
  declarations: [
      ViewSearchResultsComponent
  ],
  imports: [
    CommonModule,
    ViewTransactionCardModule
  ],
  exports: [
      ViewSearchResultsComponent
  ]
})
export class ViewSearchResultsModule { }
