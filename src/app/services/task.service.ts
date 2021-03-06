import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, tap, switchMap } from 'rxjs/operators';
import { Question } from '../models/questions';
import { InvestorTypeCharacter } from '../models/enums';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  questionsList$: BehaviorSubject<Question[]>;
  private loaded = false;

  constructor(private http: HttpClient) {
    this.questionsList$ = new BehaviorSubject<Question[]>([]);
  }

  /**
   * запрашивает список вопросов
   * (если список уже загружен, то вернет его
   * если не загружен, то делает запрос на сервер)
   */
  public getQuestionsList(): Observable<Question[]> {
    if (!this.loaded) {
      return this.reloadQuestionList().pipe(switchMap(r => this.questionsList$));
    }
    return this.questionsList$;
  }

  private reloadQuestionList(): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.apiUrl}/api/Task/GetQuestions`).pipe(
      catchError(this.handleError),
      tap(response => {
        this.questionsList$.next(response);
        this.loaded = true;
      })
    );
  }

  public postInvestorType(user: User, balls: number) {
    const obj = { user: user, balls: balls };
    return this.http.post(`${environment.apiUrl}/api/Task/GetInvestorType`, obj);
  }

  public convertRiskToString(score: InvestorTypeCharacter): string {
    switch (score) {
      case InvestorTypeCharacter.Guaranteed:
        return 'Трусишка';
      case InvestorTypeCharacter.Conservative:
        return 'Консерватор';
      case InvestorTypeCharacter.Moderate:
        return 'Сбалансированный';
      case InvestorTypeCharacter.Growth:
        return 'Целеустремленный к прибыли';
      case InvestorTypeCharacter.AggressiveGrowth:
        return 'Агрессивный';
      case InvestorTypeCharacter.MaximumGrowth:
        return 'Продам родную мать';
    }
    return 'Консерватор';
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
