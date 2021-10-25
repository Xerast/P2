import { User } from "./user";
import { Comment } from "./comment"

export interface Post{

     id:number;
     user: User;
     title: string;
     body: string;
     image_url: string;
     recommend_rest: boolean ;
     comment: Comment;
     rating: string;
     

}