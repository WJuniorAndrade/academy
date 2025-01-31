import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BackTrainingService {

  private readonly API = 'http://localhost:3000/';

  constructor( private http: HttpClient) { }

  backTraining(): Observable<any>{
    return this.http.get<any>(`${this.API}backTraining`)
  }
}
