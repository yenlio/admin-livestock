import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../types/entity/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}
  getBooks(): Observable<Array<Book>> {
  console.log("data init");

    return this.http
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []));
  }

}
