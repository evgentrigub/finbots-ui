import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from '../Models/Questions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Questions[]> {
    return this.http.get<Questions[]>(`${environment.apiUrl}/api/Task/GetQuestions`)
  }
}
