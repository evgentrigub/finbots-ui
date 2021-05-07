import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { TradingBot } from '../models/trading-bot-model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, tap, switchMap } from 'rxjs/operators';
import { Ticker } from '../models/asset';
import { FinancialInstrument } from '../models/enums';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class TradingBotsService {
  tradingBotsList$: BehaviorSubject<TradingBot[]>;
  private loaded = false;

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    this.tradingBotsList$ = new BehaviorSubject<TradingBot[]>([]);
  }

  /**
   * запрашивает список роботов
   * (если список уже загружен, то вернет его
   * если не загружен, то делает запрос на сервер)
   */
  getUserRobots(): Observable<TradingBot[]> {
    if (!this.loaded) {
      return this.reloadedTraidingBotsList().pipe(switchMap(r => this.tradingBotsList$));
    }
    return this.tradingBotsList$;
  }

  private reloadedTraidingBotsList() {
    return this.http.get<TradingBot[]>(`${environment.apiUrl}/bots`,).pipe(
      catchError(this.handleError),
      tap(response => {
        this.tradingBotsList$.next(response);
        this.loaded = true;
      })
    );
  }

  updateRobotData(bot: TradingBot): Observable<null> {
    return this.http.post<any>(`${environment.apiUrl}/api/robots/UpdateBot`, bot).pipe(
      catchError(this.handleError),
      tap(_ => { })
    );
  }

  deleteRobotData(bot: TradingBot): Observable<null> {
    return this.http.post<any>(`${environment.apiUrl}/api/robots/DeleteBot`, bot).pipe(
      catchError(this.handleError),
      tap(_ => { })
    );
  }

  public getDescription(bot_id: string): Observable<Ticker> {
    return this.http.get<Ticker>(`${environment.apiUrl}/api/robots/GetDescription?bot_id=` + bot_id);
  }

  public convertingFinancialInstrumentToString(financialInstrument: FinancialInstrument): string {
    switch (financialInstrument) {
      case FinancialInstrument.Forex:
        return 'Форекс';
      case FinancialInstrument.Stock:
        return 'Рынок акций';
    }
  }

  // public convertingIndustryToString(industry: Industry): string {
  //   switch (industry) {
  //     case 1:
  //       return 'Информационные технологии';
  //     case 2:
  //       return 'Здравоохранение';
  //     case 3:
  //       return 'Машиностроение и транспорт';
  //     case 4:
  //       return 'Недвижимость';
  //     case 5:
  //       return 'Потребительские товары и услуги';
  //     case 6:
  //       return 'Финансовы сектор';
  //     case 7:
  //       return 'Энергетика';
  //     case 8:
  //       return 'Серьевая промыщленность';
  //     case 9:
  //       return 'Электоэнергетика';
  //     case 10:
  //       return 'Телекоммуникации';
  //   }
  //   return;
  // }

  private handleError(error: HttpErrorResponse) {
    let msg: string;

    if (error.error instanceof ErrorEvent) {
      msg = 'Произошла ошибка:' + error.error.message;
    } else {
      msg = `Произошла ошибка: ${error.error}. Код ошибки ${error.status}`;
    }

    console.error('TradingBotsService::handleError() ' + msg);

    return throwError(msg);
  }
}
