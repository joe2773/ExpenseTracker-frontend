import { Input, Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Data/Interfaces/Transaction';
import { TransactionService } from 'src/app/Data/Services/transaction.service';

@Component({
  selector: 'app-view-transaction-card',
  templateUrl: './view-transaction-card.component.html',
  styleUrls: ['./view-transaction-card.component.scss']
})
export class ViewTransactionCardComponent implements OnInit {
    @Input() transaction! : Transaction;
    constructor() { }

    ngOnInit(): void {
    }

}
