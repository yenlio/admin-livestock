import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoBookRoutingModule } from './demo-book-routing.module';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookCollectionComponent } from './book/book-collection/book-collection.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from 'src/app/store/bookStore/books.reducer';
import { collectionReducer } from 'src/app/store/bookStore/collection.reducer';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home-module/home/home.component';
const routes: Routes = [
  {
    path: '',
    component: BookComponent
  },

];

@NgModule({
  declarations: [
            BookComponent,
            BookListComponent,
            BookCollectionComponent
  ],
  imports: [
    CommonModule,
    // StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    RouterModule.forChild(routes),

    DemoBookRoutingModule
  ]
})
export class DemoBookModule { }
