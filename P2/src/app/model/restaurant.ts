import { ThrowStmt } from "@angular/compiler";

export class Restaurant{

    private rest_name: string;
    private restLocation: string;
    private resLink:string;

    constructor(rest_name:string, restLocation:string, resLink:string){
        this.rest_name = rest_name;
        this.restLocation = restLocation;
        this.resLink = resLink;
    }

    getName():string{
        return this.rest_name;
    }

    getLocation():string{
        return this.restLocation;
    }

    getLink():string{
        return this.resLink;
    }
}