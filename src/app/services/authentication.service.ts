import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User, UserDto } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: UserDto) {
    return this.http
      .post<string>(`${environment.apiUrl}/account/login`, { email: user.email, password: user.password })
      .pipe(
        map(((res: any) => {
          console.log("🚀 ~ file: authentication.service.ts ~ line 34 ~ AuthenticationService ~ map ~ res", res)

          const currentUser = { email: user.email, token: res.token };
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          console.log("🚀 ~ file: authentication.service.ts ~ line 33 ~ AuthenticationService ~ map ~ currentUser", currentUser)
          this.currentUserSubject.next(currentUser);
          return user;
        })));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
