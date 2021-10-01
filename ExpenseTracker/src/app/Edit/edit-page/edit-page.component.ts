import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, Observable } from 'rxjs';
import {  ActivatedRoute, ParamMap } from '@angular/router'
@Component({
    selector: 'app-edit-page',
    templateUrl: './edit-page.component.html',
    styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
    ) { }
    
    
    ngOnInit(): void {
       
    }
}

}