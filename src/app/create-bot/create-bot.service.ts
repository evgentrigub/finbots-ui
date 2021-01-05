import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Strategy } from '../models/strategy';
import { Asset } from '../models/asset';
import { FinancialInstrument, Industry } from '../models/enums';

@Injectable({
  providedIn: 'root',
})
export class CreateBotService {
  constructor(private http: HttpClient) {}

  createBot(createdBot: any, userId: number): Observable<null> {
    const obj = { bot: createdBot, id: userId };
    return this.http.post<any>(`${environment.apiUrl}/api/robots/CreateBot`, obj).pipe(
      catchError(this.handleError),
      tap(_ => {})
    );
  }

  getFinancialInstruments() {
    return Object.values(FinancialInstrument).filter(val => typeof val === 'string') as string[];
  }

  getIndustries() {
    // return Object.values(Industry);
    return Object.values(Industry).filter(val => typeof val === 'string') as string[];
  }

  getAssets(financialInstrument: number, industry: number): Observable<Asset[]> {
    let params = new HttpParams();
    params = params.append('fi', financialInstrument.toString());
    params = params.append('ind', industry.toString());
    return this.http.get<Asset[]>(`${environment.apiUrl}/api/robots/GetAssetsByFinancialInstrumentAndIndustry`, { params: params });
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
