import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  
} 
