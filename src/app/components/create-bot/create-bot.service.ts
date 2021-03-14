import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Strategy } from '../../models/strategy';
import { Asset } from '../../models/asset';
import { FinancialInstrument } from '../../models/enums';
import { BotDto } from 'src/app/models/trading-bot-model';

@Injectable({
  providedIn: 'root',
})
export class CreateBotService {
  constructor(private http: HttpClient) { }

  createBot(bot: BotDto): Observable<null> {
    return this.http.post<any>(`${environment.apiUrl}/api/bots/create`, bot).pipe(
      catchError(this.handleError),
    );
  }

  getFinancialInstruments() {
    return Object.values(FinancialInstrument).filter(val => typeof val === 'string') as string[];
  }

  public getSecurities(instument: FinancialInstrument): Asset[] {
    // todo формировать список на бэкенде
    return [
      {
        name: 'Apple',
        ticker: 'AAPL'
      },
      {
        name: 'AMD',
        ticker: 'AMD'
      },
      {
        name: 'Activision',
        ticker: 'ATVI'
      },
      {
        name: 'VEON',
        ticker: 'VEON'
      },
    ]
  }

  public getStrategies(): Strategy[] {
    return [
      {
        name: 'TradingView',
        description: 'Берет данные по техническому анализу с TradingView'
      },
      {
        name: 'Raddar',
        description: 'Берет данные по техническому анализу с Raddar.io'
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
    let msg: string;

    if (error.error instanceof ErrorEvent) {
      msg = 'Произошла ошибка:' + error.error.message;
    } else {
      msg = `Произошла ошибка: ${error.error}. Код ошибки ${error.status}`;
    }

    console.error('CreateBotService::handleError() ' + msg);

    return throwError(msg);
  }
}
