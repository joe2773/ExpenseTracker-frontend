import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Data/Interfaces/Transaction';
import { Observable } from 'rxjs';
import { tap,map  } from 'rxjs/operators';
import { TransactionService } from 'src/app/Data/Services/transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-view-search-results',
  templateUrl: './view-search-results.component.html',
  styleUrls: ['./view-search-results.component.scss']
})
export class ViewSearchResultsComponent implements OnInit {

    transactions$ : Observable<Transaction[]> = new Observable<Transaction[]>();
    constructor(
        private route: ActivatedRoute,
        private transactionService : TransactionService
    ) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(
            params => this.transactions$ = this.transactionService.searchTransactions(params['categoryName'],params['sortOrder'])
        );
        
    }
}
