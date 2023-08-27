import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserDto, UserLocalStorage, UserTokenDto } from '../models/user.model';
import { HttpErrorBody } from '../models/errors';
import { Token } from '@angular/compiler';

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
    return this.http.post<UserTokenDto>(`${environment.apiUrl}/user/login`, { email: user.email, password: user.password }).pipe(
      map((tokenDto: UserTokenDto) => {
        this.setCurrentUser(user.email, tokenDto);
        return user;
      }),
      catchError(this.handleError)
    );
  }

  public register(user: UserDto): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/user/signup`, user).pipe(
      catchError(this.handleError)
    );
  }

  public setCurrentUser(email: string, tokenDto: UserTokenDto){
    const currentUser = { email, token: tokenDto.token };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    this.currentUserSubject.next(currentUser);
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  private handleError(error: HttpErrorBody) {
    const msg = error.message
      ? `Error happend: ${error.message}. Status code ${error.statusCode}`
      : `Unexpected server happend. Error: ${error}`
    return throwError(msg);
  }
}
