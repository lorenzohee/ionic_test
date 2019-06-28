import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Weather } from 'src/app/models/weather';

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

  getWeatherInfo(): Observable<Weather> {
    return this.httpClient.get<Weather>(`/python/api/tasks`);
  }
}
