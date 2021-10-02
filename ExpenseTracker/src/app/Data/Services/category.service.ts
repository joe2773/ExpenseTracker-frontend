import { Injectable } from '@angular/core';
import { Category } from '../Interfaces/Category';
import { BASE_CATEGORIES_URL } from '../Endpoints';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    constructor(
        private http : HttpClient
    ) { }

    public getAllCategories() : Observable<Category[]> {
        return this.http.get<Category[]>(BASE_CATEGORIES_URL);
    }
}
