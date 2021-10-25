import { User } from "./user";

export interface Comment{
    
     comment_id:number;
     user: User;
     comment_header: string;
     comment_body: string;
     post:  number;

  

}