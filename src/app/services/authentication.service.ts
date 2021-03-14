import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public get headers(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + this.currentUserValue.token
    })
  }

  login(user: UserDto) {
    return this.http
      .post<string>(`${environment.apiUrl}/users/login`, { email: user.email, password: user.password })
      .pipe(
        map(token => {
          const currentUser = { email: user.email, token };
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          this.currentUserSubject.next(currentUser);
          return user;
        }));
  }

  register(user: UserDto) {
    return this.http.post<string>(`${environment.apiUrl}/users/signup`, user)
      .pipe(
        map(token => {
          const currentUser = { email: user.email, token };
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          this.currentUserSubject.next(currentUser);
          return user;
        }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
