import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../../data/types/entity/book';

export const selectBooks = createFeatureSelector<Book[]>('books');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);