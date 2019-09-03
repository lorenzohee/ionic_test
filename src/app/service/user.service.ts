import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { StorageService } from './storage.service';
import { BaseService } from './base.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {
    super();
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(`/sso/api/v1/authen`, user).pipe(
      catchError( (error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
          errorMsg = error.error.message;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error.error[0]}`);
          errorMsg = error.error;
        }
        // return an observable with a user-facing error message
        return throwError( JSON.stringify(errorMsg));
      })
    );
  }

  getCurrentUser(): Observable<User> {
    const token = this.storage.getVal('token');
    httpOptions.headers = httpOptions.headers.set('Authorization', token as string);
    return this.http.get<User>(`https://hope.haier.com/agent_web/api/v1/users/current_user`, httpOptions).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  updateUserInfo(userInfo: User): Observable<User> {
    const token = this.storage.getVal('token');
    httpOptions.headers = httpOptions.headers.set('Authorization',  token as string);
    return this.http.put<User>(`/sso/api/v1/users/update_profile`, userInfo.sso_user, httpOptions).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
}
