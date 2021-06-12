import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private http: HttpClient) { }
  getBooks() {
    return this.http.get("http://localhost:3000/books");
  }
  getBook(id: any) {
    return this.http.get("http://localhost:3000/viewBook/" + id);
  }
  addBook(book: any) {
    return this.http.post("http://localhost:3000/addBook", book)
      .subscribe(data => { console.log(data) });
  }
  deleteBook(id: any) {
    return this.http.delete("http://localhost:3000/removeBook/" + id)
  }
  editBook(book: any, id: any) {
    console.log('book details update')
    return this.http.post("http://localhost:3000/updateBook/" + id, book)
      .subscribe(data => { console.log(data) })
  }
}
