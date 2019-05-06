import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Industry } from '../models/industry-enum';
import { Strategy } from '../models/strategy';

@Injectable({
  providedIn: 'root'
})
export class CreateBotService {

  mockFinancialInstruments: string[] = ['Акции', 'Индексы', 'Валюта', 'Криптовалюта', 'ПФИ'];
  mockAssets: string[] = ['Apple', 'Amazon', 'Facebook', 'Microsoft', 'Google'];
  mockStrategies: string[] = ['MMT', 'Arbitrage', 'Williams'];

  constructor(
    private http: HttpClient
  ) {}

  createBot(createdBot: any, userId: number): Observable<null> {
    const obj = {bot: createdBot, id: userId};
    return this.http.post<any>(`${environment.apiUrl}/api/robots/CreateBot`, obj)
    .pipe(catchError(this.handleError),
      tap( _ => {})
    );
  }

  getFinancialInstruments() {
    return this.mockFinancialInstruments;
  }

  getIndustries() {
    return Object.values(Industry);
  }

  getAssets() {
    return this.mockAssets;
  }

  public getStrategies(): Observable<Strategy[]> {
    return this.http.get<Strategy[]>(`${environment.apiUrl}/api/Strategy/GetAllStrategies/`);
  }

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
