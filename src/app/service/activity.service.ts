import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private httpClient: HttpClient,
    private storage: StorageService) {
    let token = this.storage.getVal('token')
    httpOptions.headers = httpOptions.headers.set('Authorization', <string>token);
  }

  getActivities(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(`/agent_web/api/v1/activities`, httpOptions);
  }

  getActivityById(id: number): Observable<Activity> {
    return this.httpClient.get<Activity>(`/agent_web/api/v1/activities/${id}`, httpOptions);
  }
}
