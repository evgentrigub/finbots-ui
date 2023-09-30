import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { HttpErrorBody } from "../models/errors";
import { OperationDto } from "../models/operation.model";

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  constructor(
    private http: HttpClient,
  ) { }

  public getOperations(botId: number): Observable<OperationDto[]> {
    return this.http.get<OperationDto[]>(`${environment.apiUrl}/operations/${botId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorBody) {
    const msg = error.message
      ? `Error happend: ${error.message}. Status code ${error.statusCode}`
      : `Unexpected server happend. Error: ${error}`
    return throwError(msg);
  }
}
