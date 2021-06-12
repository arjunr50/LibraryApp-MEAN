import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  book: any;


  constructor(private _book: BookService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    let id = localStorage.getItem("viewBookId");
    this._book.getBook(id).subscribe((data) => {
      this.book = JSON.parse(JSON.stringify(data));
    })
  }

  goBack() {
    this._router.navigate(['books']);
  }

}

