export class Post{

    private id:number;
    private title: string;
    private body: string;
    private res_url: string;
    private rest_id: number;
    private recommend: boolean;
    private rating: number;


    constructor(id: number, title:string, body:string, res_url:string, rest_id:number, recommend:boolean, rating:number){
        this.id = id;
        this.title = title;
        this.body = body;
        this.res_url = res_url;
        this.rest_id = rest_id;
        this.recommend = recommend;
        this.rating = rating;
    }

    getId(): number{
        return this.id;
    }

    getTitle(): string{
        return this.title;
    }

    getBody(): string{
        return this.body;
    }

    getName(): string{
        return this.res_url;
    }

    getRestId(){
        return this.rest_id;
    }

    getRecommend(){
        return this.recommend;
    }

    getRating(){
        return this.rating;
    }
}