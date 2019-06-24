import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(
    private httpClient: HttpClient,
    private storage: StorageService
  ) {
    let token = this.storage.getVal('token')
    httpOptions.headers = httpOptions.headers.set('Authorization', <string>token);
   }

  getWeatherInfo(): Observable<string> {
    return this.httpClient.get<string>(`/python/api/tasks`);
  }
}
