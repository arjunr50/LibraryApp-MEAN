import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/interfaces/author';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: Author[] = [];
  author: any;

  constructor(private _author: AuthorService,
    private _router: Router) { }

  ngOnInit(): void {
    let id = localStorage.getItem("viewAuthorId");
    this._author.getAuthor(id).subscribe((data) => {
      this.author = JSON.parse(JSON.stringify(data));
    })
  }
  viewAuthor(author: any) {
    localStorage.setItem("viewAuthorId", author._id.toString());
    this._router.navigate(['viewAuthor']);
  }
  endAlert() {
    alert("That's it folks!!");
    this._router.navigate(['authors']);
  }
  goBack() {
    this._router.navigate(['authors']);
  }

}
