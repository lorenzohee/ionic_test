import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/comment'
import { CommentService } from '../../service/comment.service'

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

  constructor(private service: CommentService) {
  }

  ngOnInit() {}

  processForm() {
  	this.newComment.commentable_id = this.articleId;
  	this.newComment.commentable_type = this.type
  	this.service.createComment(this.newComment).subscribe(res=>{
  		this.comments.splice(0,0, res);
  		this.newComment.message = ''
  	})
  }
}
