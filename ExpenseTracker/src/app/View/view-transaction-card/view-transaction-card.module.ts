import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTransactionCardComponent } from './view-transaction-card.component';



@NgModule({
  declarations: [
      ViewTransactionCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      ViewTransactionCardComponent
  ]
})
export class ViewTransactionCardModule { }
