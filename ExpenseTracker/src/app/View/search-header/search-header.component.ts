import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit {

  constructor(
      private location: Location
  ) { }

  ngOnInit(): void {
  }
  search() {
    this.location.go('?categoryName=Food');
    window.location.reload();
}

}
