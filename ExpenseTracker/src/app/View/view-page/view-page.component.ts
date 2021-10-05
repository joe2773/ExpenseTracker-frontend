import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TransactionService } from 'src/app/Data/Services/transaction.service';
import { Transaction } from 'src/app/Data/Interfaces/Transaction';
@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {
    transactions$ : Observable<Transaction[]> = new Observable<Transaction[]>();
    constructor(
        private transactionService : TransactionService
    ) { }

    ngOnInit(): void {
        
    }

    fetchTransactions(): void {
        this.transactions$ = this.transactionService.getAllTransactions();
    }
 }
