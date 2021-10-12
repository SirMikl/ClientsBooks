import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  book = {
    bookName: '',
    price: '',
    category: '',
    author: ''
  };
  isBookAdded = false;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void { }

  // Add New
  addBook(): void {
    const data = {
      bookName: this.book.bookName,
      price: this.book.price,
      category: this.book.category,
      author: this.book.author,
    };
    if (!data.bookName) {
      alert('Please add bookName!');
      return;
    }

    this.booksService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isBookAdded = true;
        },
        error => {
          console.log(error);
        });
  }

  // Reset on adding new
  newBook(): void {
    this.isBookAdded = false;
    this.book = {
      bookName: '',
    price: '',
    category: '',
    author: ''
    };
  }

}
