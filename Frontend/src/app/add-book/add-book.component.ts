import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book = {
    title: '',
    author: '',
    genre: '',
    link: '',
    blurb: '',
    image: ''
  }
  constructor(private BookService: BookService,
    private _router: Router) { }

  ngOnInit(): void {
  }
  addBook() {
    console.log("Adding to DB..");
    this.BookService.addBook(this.book);
    console.log("SUCCESS!");
    this._router.navigate(['books']);
  }

}
