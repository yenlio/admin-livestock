import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/data/types/entity/book';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  @Input() books: any;
  @Output() add = new EventEmitter<string>();
}
