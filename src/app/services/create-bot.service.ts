import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SelectData } from '../models/statistics.model';
import { StrategyViewModel, StrategyList } from '../models/strategy.model';
import { BotDto } from '../models/trading-bot.model';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class CreateBotService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  public createBot(bot: BotDto): Observable<string> {
    return this.http.post<string>(`${environment.apiUrl}/bot/create`, bot)
      .pipe(catchError(this.handleError));
  }

  // public getFinancialInstruments(): string[] {
  //   return Object.values(FinancialInstrument).filter(val => typeof val === 'string');
  // }

  public getAssets(): SelectData<string>[] {
    return [
      {
        name: 'FORD',
        value: 'F'
      },
      {
        name: 'AMD',
        value: 'AMD'
      },
      {
        name: 'Activision',
        value: 'ATVI'
      },
      {
        name: 'VEON',
        value: 'VEON'
      },
    ]
  }

  public getStrategies(): StrategyViewModel[] {
    return [
      {
        value: StrategyList.simpleTV,
        name: 'TradingView Signals',
        description: 'Get date from TradingView tech analysis ',
        disabled: false
      },
      {
        value: StrategyList.simpleRaddar,
        name: 'Raddar.io Signals',
        description: 'Get date from Raddar.io tech analysis',
        disabled: true
      }
    ]
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    let msg: string;

    if (error.error) {
      msg = 'Error:' + error.error.message;
    } else {
      msg = `Error: ${error.error}. Status: ${error.status}`;
    }

    console.error('CreateBotService::handleError() ' + msg);

    return throwError(msg);
  }
}
