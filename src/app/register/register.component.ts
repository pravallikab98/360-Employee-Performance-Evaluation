import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LocalStorageService} from '../local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegisterForm: FormGroup;
  submittedForm = false;

  constructor( private localStorage: LocalStorageService, private fb: FormBuilder, private router: Router) {}


  ngOnInit() {
    this.userRegisterForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.userRegisterForm.controls; }

  register(): void {

    this.submittedForm = true;
    if ( this.userRegisterForm.dirty && this.userRegisterForm.valid ) {
      this.localStorage.StoreRegisterDetailsInLocalStorage(this.userRegisterForm);

      this.router.navigate(['/login']);
    }
  }

}
