export declare class AuthClient {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    login(request: LoginRequestModel): Promise<LoginResponseModel>;
    protected processLogin(response: Response): Promise<LoginResponseModel>;
    register(request: RegisterRequestModel): Promise<RegisterResponseModel>;
    protected processRegister(response: Response): Promise<RegisterResponseModel>;
}
export interface LoginResponseModel {
    accessToken: string;
}
export interface LoginRequestModel {
    username?: string | undefined;
    password?: string | undefined;
}
export interface RegisterResponseModel {
    accessToken: string;
}
export interface RegisterRequestModel {
    username: string;
    password: string;
}
export declare class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: {
        [key: string]: any;
    };
    result: any;
    constructor(message: string, status: number, response: string, headers: {
        [key: string]: any;
    }, result: any);
    protected isApiException: boolean;
    static isApiException(obj: any): obj is ApiException;
}
