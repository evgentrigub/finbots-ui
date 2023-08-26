import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserProfileDto } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  public mockUserProfile: UserProfileDto = {
    email: 'demo@finbots.success',
    tinkoffToken: '',
    isTinkoffToken: true,
  }

  constructor(
    private http: HttpClient,
  ) { }

  get(): Observable<UserProfileDto> {
    return this.http.get<UserProfileDto>(`${environment.apiUrl}/user/`);
  }

  update(profile: UserProfileDto) {
    return this.http.put(`${environment.apiUrl}/user/`, profile);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/user/${id}`);
  }
}
