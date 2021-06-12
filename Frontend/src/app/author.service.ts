import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../app/interfaces/author';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }
  getAuthors() {
    return this.http.get("http://localhost:3000/authors");
  }
  getAuthor(id: any) {
    return this.http.get("http://localhost:3000/viewAuthor/" + id);
  }
  deleteAuthor(id: any) {
    return this.http.delete("http://localhost:3000/removeAuthor/" + id)
  }
  addAuthor(author: any) {
    return this.http.post("http://localhost:3000/addAuthor", author)
      .subscribe(data => { console.log(data) });
  }

  editAuthor(author: any, id: any) {
    console.log('author details update')
    return this.http.post("http://localhost:3000/updateAuthor/" + id, author)
      .subscribe(data => { console.log(data) })
  }
}
