import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserProfile, UserProfileDto } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  public mockUserProfile: UserProfileDto = {
    email: 'demo@finbots.sucess',
    name: 'Илон',
    lastName: 'Маск',
    bitrhDate: new Date('1971-06-28T00:00:00.000Z'),
    gender: '1',
    location: 'Калифорния',

    tinkoffToken: '',
    isTinkoffToken: true,
  }

  constructor(
    private http: HttpClient,
  ) { }

  get(): Observable<UserProfileDto> {
    return this.http.get<UserProfileDto>(`${environment.apiUrl}/users/profile`);
  }

  update(profile: UserProfile) {
    return this.http.put(`${environment.apiUrl}/users/profile`, profile);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }
}
