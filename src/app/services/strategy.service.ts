import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Strategy } from '../models/strategy.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StrategyService {
  constructor(private http: HttpClient) { }

  public getStrategies(): Observable<Strategy[]> {
    return this.http.get<Strategy[]>(`${environment.apiUrl}/api/Strategy/GetAllStrategies/`);
  }
}
