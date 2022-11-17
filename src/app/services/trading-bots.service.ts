import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CronStatus, TradingBot } from '../models/trading-bot.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { delay } from 'rxjs/operators';
import { Ticker } from '../models/tickers.model';

@Injectable({ providedIn: 'root' })
export class TradingBotsService {
  constructor(
    private http: HttpClient
  ) {}

  public mockBotsArray: TradingBot[] = [
    {
      id: "1",
      ticker: "AAPL",
      createdDate: Date.now() - 5000000,
      isActive: true,
      broker: "Tinkoff",
      brokerFee: 0.03,
      strategy: "simpleTV",
      profit: "1.2",
      status: CronStatus.Scheduled,
    },
    {
      id: "2",
      ticker: "AMD",
      createdDate: Date.now() - 700000,
      isActive: true,
      broker: "Tinkoff",
      brokerFee: 0.03,
      strategy: "simpleTV",
      profit: "1.2",
      status: CronStatus.Stopped
    }
  ]

  getUserBots(): Observable<TradingBot[]> {
    // return this.http.get<TradingBot[]>(`${environment.apiUrl}/bots`,).pipe(
    //   catchError(this.handleError),
    // );

    return of(this.mockBotsArray).pipe(delay(500));

  }

  updateBotData(bot: TradingBot): Observable<null> {
    // return this.http.put<any>(`${environment.apiUrl}/api/bots/UpdateBot`, bot).pipe(
    //   catchError(this.handleError),
    //   tap(_ => { })
    // );

    return of(null).pipe(delay(500));
  }

  deleteBotData(bot: TradingBot): Observable<null> {
    // return this.http.delete<any>(`${environment.apiUrl}/api/bots/delete/${bot.id}`).pipe(
    //   catchError(this.handleError),
    //   tap(_ => { })
    // );

    this.mockBotsArray = this.mockBotsArray.filter(b => b.id !== bot.id)
    return of(null).pipe(delay(500));
  }

  public getDescription(bot_id: string): Observable<Ticker> {
    return this.http.get<Ticker>(`${environment.apiUrl}/api/bots/GetDescription?bot_id=` + bot_id);
  }

  // private handleError(error: HttpErrorResponse) {
  //   let msg: string;

  //   if (error.error instanceof ErrorEvent) {
  //     msg = 'Произошла ошибка:' + error.error.message;
  //   } else {
  //     msg = `Произошла ошибка: ${error.error}. Код ошибки ${error.status}`;
  //   }

  //   console.error('TradingBotsService::handleError() ' + msg);

  //   return throwError(msg);
  // }
}
