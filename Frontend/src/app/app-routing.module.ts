import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UpdateProductComponent } from './update-product/update-product.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'index', component: HomeComponent },
  { path: 'userRegister', component: RegisterComponent },
  { path: 'userLogin', component: LoginComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'userHome', component: UserHomeComponent },
  { path: 'adminHome', component: AdminHomeComponent, canActivate: [AuthGuard] },
  { path: 'books', component: BooksComponent },
  { path: 'viewBook', component: BookComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'viewAuthor', component: AuthorComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'addAuthor', component: AddAuthorComponent },
  { path: 'updateBook', component: UpdateBookComponent },
  { path: 'updateAuthor', component: UpdateAuthorComponent },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'update',
    component: UpdateProductComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
