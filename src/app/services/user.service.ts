import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }

  getById(id: number) {
    return this.http.get(`${environment.apiUrl}/account/${id}`);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/account/signup`, user);
  }

  update(user: User) {
    return this.http.put(`${environment.apiUrl}/account/${user._id}`, user);
  }

  updateAccount(user: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/account/addMoney/${user._id}`, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/account/${id}`);
  }
}
