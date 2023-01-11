import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/data/types/entity/book';
@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent {
  @Input() books: any;
  @Output() remove = new EventEmitter<string>();
}
