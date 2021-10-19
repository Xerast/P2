export class Comments{
    
    private comment_id:number;
    private comment_header: string;
    private comment: string;

    constructor(comment_id:number, comment_header:string, comment:string){
        this.comment_id = comment_id;
        this.comment_header = comment_header;
        this.comment = comment;
    }

    getCommentId():number{
        return this.comment_id;
    }

    getCommentHead():string{
        return this.comment_header;
    }

    getComment():string{
        return this.comment;
    }

}