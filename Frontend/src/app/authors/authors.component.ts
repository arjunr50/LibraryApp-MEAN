import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { AuthService } from '../auth.service';
import { Author } from 'src/app/interfaces/author';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  userType!: string;
  authors: Author[] = [];
  title: string = 'Author List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;


  constructor(private _router: Router, private AuthorService: AuthorService, public _auth: AuthService) { }

  ngOnInit(): void {
    this.AuthorService.getAuthors().subscribe((data) => {
      this.authors = JSON.parse(JSON.stringify(data));
    })
  }
  viewAuthor(author: any) {
    localStorage.setItem("viewAuthorId", author._id.toString());
    this._router.navigate(['viewAuthor']);
  }
  editAuthor(author: any) {
    localStorage.setItem("editAuthorId", author._id.toString());
    this._router.navigate(['updateAuthor']);

  }
  deleteAuthor(author: any) {
    this.AuthorService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(p => p !== author);
      })

  }
}
