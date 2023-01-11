import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookService } from 'src/app/data/service/book.service';
import { BooksActions, BooksApiActions } from 'src/app/store/bookStore/books.actions';
import { selectBookCollection, selectBooks } from 'src/app/store/bookStore/books.selectors';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(private booksService: BookService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }
}
