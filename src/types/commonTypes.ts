export class MethodResponse {
    status: number;
    responseMessage: string;
    payload? : any;
    constructor(status: number, responseMessage: string, payload ? : any){
        this.status = status,
        this.responseMessage = responseMessage;
        this.payload = payload;
    };
}

export enum ResponseStatusCode{
    Okay = 200,
    Success= 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound =404,
    InternalError = 500
}

export enum ArticleState {
    Archived = "Archived",
    Active = "Active"
}

