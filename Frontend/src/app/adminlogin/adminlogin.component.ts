import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }
  user = {
    email: '',
    password: ''
  };
  validateUser() {
    this._auth.validateUser(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          localStorage.setItem("userType", 'admin')
          this._router.navigate(['/adminHome'])
        },
        err => {
          console.log(err);
          this._router.navigate(['/adminHome'])
        }
      )
  }

}
