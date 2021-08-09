import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FinancialInstrument } from '../models/enums';
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

  public getFinancialInstruments(): string[] {
    return Object.values(FinancialInstrument).filter(val => typeof val === 'string');
  }

  public getAssets(instrument: FinancialInstrument): SelectData<string>[] {
    // todo формировать список на бэкенде
    // пока всегда возвращает акции
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
        name: 'Сигналы из Trading View',
        description: 'Берет данные по техническому анализу с TradingView',
        disabled: false
      },
      {
        value: StrategyList.simpleRaddar,
        name: 'Сигналы из Raddar.io',
        description: 'Берет данные по техническому анализу с Raddar.io',
        disabled: true
      }
    ]
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    let msg: string;

    if (error.error) {
      msg = 'Произошла ошибка:' + error.error.message;
    } else {
      msg = `Произошла ошибка: ${error.error}. Код ошибки ${error.status}`;
    }

    console.error('CreateBotService::handleError() ' + msg);

    return throwError(msg);
  }
}


  // getIndustries() {
  //   return Object.values(Industry).filter(val => typeof val === 'string') as string[];
  // }

  // getAssets(financialInstrument: number, industry: number): Observable<Asset[]> {
  //   let params = new HttpParams();
  //   params = params.append('fi', financialInstrument.toString());
  //   params = params.append('ind', industry.toString());
  //   return this.http.get<Asset[]>(`${environment.apiUrl}/api/robots/GetAssetsByFinancialInstrumentAndIndustry`, { params: params });
  // }