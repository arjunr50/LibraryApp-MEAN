import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/interfaces/author';
import { AuthorService } from 'src/app/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  author: Author = {
    author: '',
    title: '',
    genre: '',
    desc: '',
    link: '',
    image: ''
  };

  constructor(private AuthorService: AuthorService,
    private _router: Router) { }

  ngOnInit(): void {
  }
  addAuthor() {
    console.log("Adding to DB..");
    this.AuthorService.addAuthor(this.author);
    console.log("SUCCESS!");
    this._router.navigate(['authors']);
  }

}
