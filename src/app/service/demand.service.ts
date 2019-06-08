import { Injectable } from '@angular/core';
import { Demand } from '../models/demand';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  constructor(
    private httpClient: HttpClient,
    private storage: StorageService
  ) {
    let token = this.storage.getVal('token')
    httpOptions.headers = httpOptions.headers.set('Authorization', <string>token);
   }

  getDemandList(): Observable<Demand[]> {
    return this.httpClient.get<Demand[]>(`/agent_web/api/v1/demands`, httpOptions);
  }
}
