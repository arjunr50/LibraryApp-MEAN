import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { AuthService } from '../auth.service';
import { Book } from 'src/app/interfaces/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  userType!: string;
  books: Book[] = [];
  title: string = 'Book List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;



  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  constructor(private _router: Router, private BookService: BookService, public _auth: AuthService) { }

  ngOnInit(): void {
    this.BookService.getBooks().subscribe((data) => {
      this.books = JSON.parse(JSON.stringify(data));
    })
  }
  viewBook(book: any) {
    localStorage.setItem("viewBookId", book._id.toString());
    this._router.navigate(['viewBook']);
  }
  editBook(book: any) {
    localStorage.setItem("editBookId", book._id.toString());
    this._router.navigate(['updateBook']);
  }
  deleteBook(book: any) {
    this.BookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== book);
      })

  }

}



