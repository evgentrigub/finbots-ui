import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { StatsView } from '../models/StatsView';
import { InvestorType } from '../models/investor-type-enum';
import { catchError, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserStatsService {

  stats$: BehaviorSubject<StatsView>;
  private loaded = false;

  constructor(
    private http: HttpClient
    ) {
    this.stats$ = new BehaviorSubject<StatsView>({profit: 0, account: 0, robotQuantity: 0, riskType: InvestorType.Guaranteed});
  }

  /**
   * запрашивает статистику по пользователю и кеширует её
   * @param id пользователя
   */
  getStatsById(id: number): Observable<StatsView> {
    // return this.http.get<StatsView>(`${environment.apiUrl}/users/stat/${id}`)
    // if (!this.loaded) {
      return this.reloadedStats(id).pipe(switchMap(r => this.stats$));
    // }
    // return this.stats$;
  }

  private reloadedStats(id: number): Observable<StatsView> {
    return this.http.get<StatsView>(`${environment.apiUrl}/users/stat/${id}`)
      .pipe(catchError(this.handleError),
      tap(response => {
        this.stats$.next(response);
        this.loaded = true;
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    let msg: string;
    if (error.error instanceof ErrorEvent) {
        msg = 'Произошла ошибка:' + error.error.message;
    } else {
        msg = `Произошла ошибка: ${error.error}. Код ошибки ${error.status}`;
    }
    return throwError(msg);
  }
}

