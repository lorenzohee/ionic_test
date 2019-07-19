import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/comment'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {

	@Input('comments')
	comments: Comment[];

	@Input('articleType')
	type: string;

	@Input('articleId')
	articleId: number;

  constructor() { }

  ngOnInit() {}

}
