import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import User from './User';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public loginUser: string;
  public item: any;
  public uri = 'http://localhost:4000/user';
  public users: User[];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, public http: HttpClient) { }
  public StoreRegisterDetailsInLocalStorage(fg: FormGroup): void {

    /*
    this.storage.set('FIRST_NAME', fg.get('firstName').value);
    this.storage.set('LAST_NAME', fg.get('lastName').value);
    this.storage.set('EMAIL_ID', fg.get('email').value);
    this.storage.set('PASSWORD', fg.get('password').value);
    */

    const obj = {
      email: fg.get('email').value,
      password: fg.get('password').value
    };

    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }


  public async CheckUserCredentials(fg: FormGroup): Promise<boolean> {

    let validUser = false;
    await this.http.get(`${this.uri}/get`).toPromise().then((data: User[]) => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        if (data[i].email === fg.get('email').value &&
          data[i].password === fg.get('password').value) {
          this.loginUser = fg.get('email').value;
          validUser = true;
        }
      }
    });

    if (validUser) {
      this.storage.set('username', fg.get('email').value);
    }

    return validUser;
  }


  public getUserEmail() {
    return this.storage.get('username');
  }

  public setItem(Item) {
    console.log(Item);
    this.storage.set('item', Item);
  }

  public getItem() {
    return this.storage.get('item');
  }
}
