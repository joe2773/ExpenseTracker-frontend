import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Timestamp } from 'rxjs';
import { Transaction } from '../Interfaces/Transaction';
import { BASE_CATEGORIES_URL, BASE_TRANSACTION_URL } from '../Endpoints';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

    constructor(
        private http: HttpClient
    ) { }

    getAllTransactions() : Observable<Transaction[]> {
        return this.http.get<Transaction[]>(BASE_TRANSACTION_URL);
    }

    searchTransactions(categoryName: string, sortOrder: string) : Observable<Transaction[]> {
        var searchUrl = this.buildSearchUrl(categoryName,sortOrder);
        return this.http.get<Transaction[]>(searchUrl);
    }

    private buildSearchUrl(categoryName: string, sortOrder: string) : string {
        return BASE_TRANSACTION_URL + '?'
            + (categoryName == '' ? '' : 'categoryName=' + categoryName)
            + (categoryName != '' && sortOrder != '' ? '&' : '')
            + (sortOrder == '' ? '' : 'sortOrder='+ sortOrder);
    }
}
