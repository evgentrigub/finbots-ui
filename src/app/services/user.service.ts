import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserProfileDto, UserTokenDto, ValidateTokenDto } from '../models/user.model';
import { Observable, throwError } from 'rxjs';
import { HttpErrorBody } from '../models/errors';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  public mockUserProfile: UserProfileDto = {
    email: 'demo@finbots.success',
    tinkoffToken: '',
  }

  constructor(
    private http: HttpClient,
  ) { }

  get(): Observable<UserProfileDto> {
    return this.http.get<UserProfileDto>(`${environment.apiUrl}/user/`);
  }

  getValidateToken(isDemo: boolean): Observable<ValidateTokenDto> {
    const prod = false // TODO
    return this.http.get<ValidateTokenDto>(`${environment.apiUrl}/user/token/validate?prod=${prod}&demo=${isDemo}`)
      .pipe(catchError(this.handleError));
  }

  update(email: string, tinkoffToken?: string): Observable<UserTokenDto> {
    const profile: UserProfileDto = {email, tinkoffToken}
    return this.http.put<UserTokenDto>(`${environment.apiUrl}/user/`, profile)
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/user/${id}`);
  }

  private handleError(error: HttpErrorBody) {
    const msg = error.message
      ? `Error happend: ${error.message}. Status code ${error.statusCode}`
      : `Unexpected server happend. Error: ${error}`
    return throwError(msg);
  }
}
