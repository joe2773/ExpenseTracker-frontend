import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Timestamp } from 'rxjs';
import { Transaction } from '../Interfaces/Transaction';
import { BASE_TRANSACTION_URL } from '../Endpoints';
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
}
