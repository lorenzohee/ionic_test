import { Comment } from './comment'
export class Activity {
	id: number;
	title: string;
	brief: string;
	content: string;
    comments: Comment[];
	favorite_id: number;
}
