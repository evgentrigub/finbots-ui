import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserDto, UserTokenDto } from '../models/user.model';
import { HttpErrorBody } from '../models/errors';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public $currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.$currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get headers(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.currentUserValue && this.currentUserValue.token ? this.currentUserValue.token : ''}`
    })
  }

  public login(user: UserDto): Observable<UserDto> {
    return this.http.post<UserTokenDto>(`${environment.apiUrl}/user/login`, { email: user.email, password: user.password })
      .pipe(map((tokenDto: UserTokenDto) => {
        const currentUser = { email: user.email, token: tokenDto.token };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.currentUserSubject.next(currentUser);
        return user;
      }),
      catchError(this.handleError));
  }

  public register(user: UserDto): Observable<UserDto> {
    return this.http.post<string>(`${environment.apiUrl}/user/signup`, user).pipe(map(token => {
      const currentUser = { email: user.email, token };
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      this.currentUserSubject.next(currentUser);
      return user;
    }));
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  private handleError(error: HttpErrorBody) {
    const msg = error.message
      ? `Erorr while authorising: ${error.message}. Status code ${error.statusCode}`
      : `Error happend. Erorr: ${error}`
    return throwError(msg);
  }
}
