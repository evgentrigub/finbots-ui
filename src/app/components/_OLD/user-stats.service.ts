// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, BehaviorSubject, throwError } from 'rxjs';
// import { StatsView } from '../models/statistics.model';
// import { environment } from 'src/environments/environment';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserStatsService {
//   stats$: BehaviorSubject<StatsView>;
//   private loaded = false;

//   constructor(
//     private http: HttpClient,

//   ) { }

//   /**
//    * запрашивает статистику по пользователю и кеширует её
//    * @param id пользователя
//    */
//   getStatsById(id: number): Observable<StatsView> {
//     return this.http.get<StatsView>(`${environment.apiUrl}/users/stat/${id}`)
//       .pipe(catchError(this.handleError));
//   }

//   private handleError(error: HttpErrorResponse) {
//     let msg: string;
//     if (error.error instanceof ErrorEvent) {
//       msg = 'Произошла ошибка:' + error.error.message;
//     } else {
//       msg = `Произошла ошибка: ${error.error}. Код ошибки ${error.status}`;
//     }
//     return throwError(msg);
//   }
// }
