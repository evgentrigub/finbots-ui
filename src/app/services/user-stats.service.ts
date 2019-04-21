import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { StatsView } from '../interfaces/StatsView';

@Injectable({
  providedIn: 'root'
})
export class UserStatsService {

  constructor(private http: HttpClient) { }

  getById(id: number) : Observable<StatsView> {
    return this.http.get<StatsView>(`${environment.apiUrl}/users/stat/${id}`);
  }
}
