import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Data/Interfaces/Transaction';
@Component({
  selector: 'app-view-search-results',
  templateUrl: './view-search-results.component.html',
  styleUrls: ['./view-search-results.component.scss']
})
export class ViewSearchResultsComponent implements OnInit {
@Input() transactions! : Transaction[];
  constructor() { }

  ngOnInit(): void {
  }

}
