import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserProfile, UserProfileDto } from '../models/user';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  get(): Observable<UserProfileDto> {
    return this.http.get<UserProfileDto>(`${environment.apiUrl}/users/profile`, { headers: this.authenticationService.headers });
  }

  update(profile: UserProfile) {
    return this.http.put(`${environment.apiUrl}/users/profile`, profile,
      { headers: this.authenticationService.headers });
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }
}
