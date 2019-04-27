import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { TradingBot } from '../Models/trading-bot-model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TradingBotsService {

  constructor(
    private http: HttpClient
  ) { }

  getUserRobpts(id: number): Observable<TradingBot[]> {
    return this.http.get<TradingBot[]>(`${environment.apiUrl}/api/robots/GetUserRobots?id=`+ id)
  }

  updateRobotName(bot: TradingBot) {
    return this.http.post(`${environment.apiUrl}/api/robots/UpdateBot`, bot)
  }
}
