import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService,
    private _router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }
  user = {
    email: '',
    password: ''
  };

  validateUserLogin() {
    this._auth.validateUserLogin(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          // this.loginOccured.emit(1);
          localStorage.setItem("userType", 'user');
          this._router.navigate(['/userHome']);
        },
        err => {
          console.log(err);
          this._router.navigate(['/userLogin']);
          alert('Invalid Credentials! Please try again!')

        }
      )
    // alert('Successfully Validated! Logging in..')

  }
}
