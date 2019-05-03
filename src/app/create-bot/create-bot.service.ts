import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CreatedTradingBot } from '../Models/trading-bot-model';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateBotService {

  mockFinancialInstruments: string[] = ['Акции', 'Индексы', 'Валюта', 'Криптовалюта', 'ПФИ'];
  mockIndusties: string[] = ['IT-отрасль', 'Строительство', 'Транспорт', 'Связь', 'Общепит'];
  mockStrategies: string[] = ['MMT', 'Arbitrage', 'Williams'];

  constructor(
    private http: HttpClient
  ) {}

  // бэк пока не готов
  createBot(createdBot: CreatedTradingBot): Observable<null> {
    return this.http.post<any>(`${environment.apiUrl}/api/robots/CreateBot`, createdBot)
    .pipe(catchError(this.handleError),
      tap( _ => {})
    );
  }

  getFinancialInstruments() {
    return this.mockFinancialInstruments;
  }

  getIndustries() {
    return this.mockIndusties;
  }

  getStrategies() {
    return this.mockStrategies;
  }

  private handleError(error: HttpErrorResponse) {
    let msg: string;

    if (error.error instanceof ErrorEvent) {
      msg = 'Произошла ошибка:' + error.error.message;
    } else {
      msg = `Произошла ошибка: ${error.error}. Код ошибки ${error.status}`;
    }

    console.error('ScenarioService::handleError() ' + msg);

    return throwError(msg);
  }
}
