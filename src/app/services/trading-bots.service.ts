import { Injectable } from '@angular/core';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { TradingBot } from '../Models/trading-bot-model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TradingBotsService {

  constructor(
    private http: HttpClient
  ) { }

  getUserRobpts(id: number): Observable<TradingBot[]> {
    return this.http.get<TradingBot[]>(`${environment.apiUrl}/api/robots/GetUserRobots?id=` + id);
  }

  updateRobotName(bot: TradingBot): Observable<null> {
    console.log(bot);
    return this.http.post<any>(`${environment.apiUrl}/api/robots/UpdateBot`, bot)
    .pipe(
      catchError(this.handleError),
      tap( _ => {}));
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
