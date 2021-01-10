export interface GeneralUserRegistationParams {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    userType?: UserType
}

export enum UserType {
    admin = 'admin',
    public = 'public'
}

export interface LoginParameters {
    email: string,
    password: string,
}

export interface JWTtokenCreateParameters {
    _id : string,
    email : string,
}

export interface JWTtokenReturnParameters {
    uuid : string,
    createdDate : number
}
