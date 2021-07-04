import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { InvestorTypeCharacter } from '../models/enums';
import { StatsView } from '../models/statistics.model';

@Injectable({
  providedIn: 'root',
})
export class UserStatsService {
  stats$: BehaviorSubject<StatsView>;
  private loaded = false;

  constructor(private http: HttpClient) {
    this.stats$ = new BehaviorSubject<StatsView>({ profit: 0, account: 0, robotQuantity: 0, riskType: InvestorTypeCharacter.Guaranteed });
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
    return of({ profit: 0, account: 0, robotQuantity: 0, riskType: InvestorTypeCharacter.Guaranteed })
    // return this.http.get<StatsView>(`${environment.apiUrl}/users/stat/${id}`).pipe(
    //   catchError(this.handleError),
    //   tap(response => {
    //     this.stats$.next(response);
    //     this.loaded = true;
    //   })
    // );
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
