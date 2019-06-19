import { Component } from '@angular/core';
import { Book } from '../../classes/book';

@Component({
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent {
  book: Book;

  constructor() {}
}
