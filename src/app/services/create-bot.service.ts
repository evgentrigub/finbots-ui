import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SelectData } from '../models/statistics.model';
import { StrategyViewModel, StrategyName } from '../models/strategy.model';
import { BotDto } from '../models/trading-bot.model';
import { environment } from '../../environments/environment';
import { HttpErrorBody } from '../models/errors';

@Injectable({
  providedIn: 'root',
})
export class CreateBotService {
  constructor(
    private http: HttpClient,
  ) { }

  public createBot(bot: BotDto): Observable<string> {
    return this.http.post<string>(`${environment.apiUrl}/bots`, bot).pipe(
      catchError(this.handleError));
  }

  public getAssets(): SelectData<string>[] {
    return [
      {
        name: 'GOOG',
        value: 'GOOG'
      },{
        name: 'MSFT',
        value: 'MSFT'
      },
      {
        name: 'FORD',
        value: 'F'
      },
      {
        name: 'SBER',
        value: 'SBER'
      },
      {
        name: 'YNDX',
        value: 'YNDX'
      },
    ]
  }

  public getStrategies(): StrategyViewModel[] {
    return [
      {
        value: StrategyName.tv1,
        name: 'TradingView 1 minute',
        description: 'Get tech analysis date from TradingView for last 1 minute',
        disabled: false
      },
      {
        value: StrategyName.tv5,
        name: 'TradingView 5 minutes',
        description: 'Get tech analysis date from TradingView for last 5 minutes',
        disabled: false
      },
      {
        value: StrategyName.tv15,
        name: 'TradingView 15 minutes',
        description: 'Get tech analysis date from TradingView for last 15 minutes',
        disabled: false
      },
      {
        value: StrategyName.tv30,
        name: 'TradingView 30 minutes',
        description: 'Get tech analysis date from TradingView for last 30 minutes',
        disabled: false
      },
      {
        value: StrategyName.tv60,
        name: 'TradingView 60 minutes',
        description: 'Get tech analysis date from TradingView for last 60 minutes',
        disabled: false
      },
    ]
  }

  private handleError(error: HttpErrorBody) {
    const msg = error.message
      ? `Error happend: ${error.message}. Status code ${error.statusCode}`
      : `Unexpected server happend. Error: ${error}`
    return throwError(msg);
  }
}
