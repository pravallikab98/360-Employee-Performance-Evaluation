import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LocalStorageService} from '../local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;
  invalidCredentials: string;

  constructor( private localStorage: LocalStorageService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.invalidCredentials = null;

    this.userLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  get f() { return this.userLoginForm.controls; }

  async login() {
    this.invalidCredentials = null;
    if ( this.userLoginForm.valid && this.userLoginForm.dirty) {
      const validUser = await this.localStorage.CheckUserCredentials(this.userLoginForm);
      if ( validUser ) {
        this.router.navigate(['/survey']);
        this.invalidCredentials = null;
      } else {
        this.invalidCredentials = 'Invalid Login Crendentials';
      }
    }
  }
}
