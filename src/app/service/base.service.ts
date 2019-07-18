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
export class BaseService {
  httpClient: HttpClient;
  storage: StorageService;
  constructor() {
	  let token = this.storage.getVal('token')
	  httpOptions.headers = httpOptions.headers.set('Authorization', <string>token);
  }
}
