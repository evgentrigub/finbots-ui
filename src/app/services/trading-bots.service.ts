import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { BotStatusDto, CronStatus, TradingBot } from '../models/trading-bot.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, delay } from 'rxjs/operators';
import { HttpErrorBody } from '../models/errors';

@Injectable({ providedIn: 'root' })
export class TradingBotsService {
  constructor(
    private http: HttpClient
  ) {}

  getUserBots(): Observable<TradingBot[]> {
    return this.http.get<TradingBot[]>(`${environment.apiUrl}/bots/status`,).pipe(
      catchError(this.handleError),
    );

    // return of(this.mockBotsArray).pipe(delay(500));
  }

  updateBotData(bot: TradingBot): Observable<BotStatusDto> {
    const dto: BotStatusDto = { status: bot.status };
    return this.http.put<any>(`${environment.apiUrl}/bots/${bot.ticker}/status`, dto).pipe(
      catchError(this.handleError),
    );

    // return of(null).pipe(delay(500));
  }

  deleteBotData(bot: TradingBot): Observable<null> {
    return this.http.delete<any>(`${environment.apiUrl}/bots/${bot.ticker}`).pipe(
      catchError(this.handleError),
    );

    // this.mockBotsArray = this.mockBotsArray.filter(b => b.id !== bot.id)
    // return of(null).pipe(delay(500));
  }

  private handleError(error: HttpErrorBody) {
    const msg = error.message
      ? `Error happend: ${error.message}. Status code ${error.statusCode}`
      : `Unexpected server happend. Error: ${error}`
    return throwError(msg);
  }

    // public mockBotsArray: TradingBot[] = [
  //   {
  //     id: "1",
  //     ticker: "AAPL",
  //     createdDate: Date.now() - 5000000,
  //     isActive: true,
  //     broker: "Tinkoff",
  //     brokerFee: 0.03,
  //     strategy: "simpleTV",
  //     profit: "1.2",
  //     status: CronStatus.Scheduled,
  //   },
  //   {
  //     id: "2",
  //     ticker: "AMD",
  //     createdDate: Date.now() - 700000,
  //     isActive: true,
  //     broker: "Tinkoff",
  //     brokerFee: 0.03,
  //     strategy: "simpleTV",
  //     profit: "1.2",
  //     status: CronStatus.Stopped
  //   }
  // ]
}
