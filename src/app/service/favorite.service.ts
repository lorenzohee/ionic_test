import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Favorite } from '../models/favorite'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(
    private httpClient: HttpClient,
    private storage: StorageService) {
    let token = this.storage.getVal('token')
    httpOptions.headers = httpOptions.headers.set('Authorization', <string>token);
  }

  getFavoriteList(): Observable<Favorite[]> {
    return this.httpClient.get<Favorite[]>(`/agent_web/api/v1/favorites/my_favorites`, httpOptions)
  }

  starArticle(favoritable_id: number, favoritable_type: string): Observable<any> {
  	let postData = {
      favoritable_type: favoritable_type,
      favoritable_id: favoritable_id
  	}
  	return this.httpClient.post<any>(`/agent_web/api/v1/favorites`, postData, httpOptions)
  }

  unStarArticle(favoriteid: number): Observable<any> {
  	return this.httpClient.delete<any>(`/agent_web/api/v1/favorites/${favoriteid}`, httpOptions)
  }
}
