import { Comment } from './comment'
export class Demand {
    id: number;
    title: string;
    brief: string;
    created_at: string;
    content: string;
    user_name: number;
    user_avatar: string;
    tag_list: string[];
    impressionist_count: number;
    favorites_count: number;
    comments: Comment[];
    favorite_id: number;
    deadline: string;
}
