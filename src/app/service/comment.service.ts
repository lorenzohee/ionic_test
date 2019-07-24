import { Injectable } from '@angular/core';
import { Comment } from '../models/comment'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private httpClient: HttpClient,
    private storage: StorageService
  ) {
    let token = this.storage.getVal('token')
    httpOptions.headers = httpOptions.headers.set('Authorization', <string>token);
   }

  createComment(comment: Comment): Observable<Comment> {
  	return this.httpClient.post<Comment>(`/agent_web/api/v1/comments`, comment, httpOptions)
  }
}