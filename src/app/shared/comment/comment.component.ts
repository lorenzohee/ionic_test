import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/comment'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
	newComment = new Comment()
	@Input('comments')
	comments: Comment[];

	@Input('articleType')
	type: string;

	@Input('articleId')
	articleId: number;

  constructor() {
  }

  ngOnInit() {}

  processForm() {
  	this.newComment.commentable_id = this.articleId;
  	this.newComment.commentable_type = this.type
  	console.log(this.newComment)
  }
}
