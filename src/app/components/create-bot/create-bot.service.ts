import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ticker } from '../../models/asset';
import { FinancialInstrument } from '../../models/enums';
import { BotDto } from 'src/app/models/trading-bot-model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StrategyList, StrategyViewModel } from 'src/app/models/strategy';

@Injectable({
  providedIn: 'root',
})
export class CreateBotService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  createBot(bot: BotDto): Observable<string> {
    return this.http.post<string>(`${environment.apiUrl}/bot/create`, bot).pipe(
      catchError(this.handleError),
    );
  }

  getFinancialInstruments() {
    return Object.values(FinancialInstrument).filter(val => typeof val === 'string') as string[];
  }

  public getSecurities(instument: FinancialInstrument): Ticker[] {
    // todo формировать список на бэкенде
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
        name: StrategyList.simpleTV,
        description: 'Берет данные по техническому анализу с TradingView',
        disabled: false
      },
      {
        name: StrategyList.simpleRaddar,
        description: 'Берет данные по техническому анализу с Raddar.io',
        disabled: true
      }
    ]
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

  private handleError(error: HttpErrorResponse) {
    console.log("🚀 ~ file: create-bot.service.ts ~ line 78 ~ CreateBotService ~ handleError ~ error", error)
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
