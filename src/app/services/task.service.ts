import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { Question } from '../models/question';
import { environment } from 'src/environments/environment';
import { catchError, tap, switchMap } from 'rxjs/operators';
import { InvestorType } from '../Models/investor-type-enum';
import { User } from '../account/_models/user';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  questionsList$: BehaviorSubject<Question[]>;
  private loaded = false;

  constructor(
    private http: HttpClient
  ) {
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
    return this.http.get<Question[]>(`${environment.apiUrl}/api/Task/GetQuestions`)
      .pipe(catchError(this.handleError),
        tap(response => {
          this.questionsList$.next(response);
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

  public postInvestorType(user: User, balls: number) {
    let obj = {user: user, balls: balls}
    return this.http.post(`${environment.apiUrl}/api/Task/GetInvestorType`, obj);
  }

  public convertRiskToString(balls: InvestorType):  string {
      switch (balls)
      {
        case InvestorType.Guaranteed : 
          return "Трусишка";
        case InvestorType.Conservative :
          return "Консерватор";
        case InvestorType.Moderate : 
          return "Сбалансированный";
        case InvestorType.Growth : 
          return "Целеустремленный к прибыли";
        case InvestorType.AggressiveGrowth :
          return "Агрессивный";
        case InvestorType.MaximumGrowth : 
          return "Продам родную мать";
      }
      return "Консерватор"
  } 

}
