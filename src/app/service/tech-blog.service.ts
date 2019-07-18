import { Injectable } from '@angular/core';
import { TechBlog } from '../models/tech-blog';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TechBlogService {

  constructor(
    private httpClient: HttpClient,
    private storage: StorageService) {
    let token = this.storage.getVal('token')
    httpOptions.headers = httpOptions.headers.set('Authorization', <string>token);
  }

  getTechBlogs(): Observable<TechBlog[]> {
    return this.httpClient.get<TechBlog[]>(`/agent_web/api/v1/tech_blogs`, httpOptions);
  }

  getTechBlogById(id: number): Observable<TechBlog> {
    return this.httpClient.get<TechBlog>(`/agent_web/api/v1/tech_blogs/${id}`, httpOptions);
  }
}
