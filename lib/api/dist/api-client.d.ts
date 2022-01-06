export declare class ProductRequestClient {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    vote(id: string, direction: ProductRequestVoteDirection | undefined): Promise<FileResponse>;
    protected processVote(response: Response): Promise<FileResponse>;
    create(request: ProductRequestCreateRequest): Promise<ProductRequestDto>;
    protected processCreate(response: Response): Promise<ProductRequestDto>;
    getAll(): Promise<ProductRequestDto[]>;
    protected processGetAll(response: Response): Promise<ProductRequestDto[]>;
    get(id: string | null): Promise<ProductRequestDto>;
    protected processGet(response: Response): Promise<ProductRequestDto>;
}
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
export declare enum ProductRequestVoteDirection {
    Upvote = 1,
    Downvote = -1
}
export interface ProductRequestDto {
    id: string;
    title: string;
    category: ProductRequestCategory;
    upvotes: number;
    status: ProductRequestStatus;
    description?: string;
    comments: CommentDto[];
    hasCurrentUserUpvoted: boolean;
}
export declare enum ProductRequestCategory {
    Feature = 1,
    Enhancement = 2,
    Ui = 3,
    Ux = 4,
    Bug = 5
}
export declare enum ProductRequestStatus {
    Suggestion = 1,
    Planned = 2,
    InProgress = 3,
    Live = 4
}
export interface CommentDto {
    id: string;
    content: string;
    user: IdentityUserDto;
}
export interface IdentityUserDto {
    id: string;
    username: string;
}
export interface ProductRequestCreateRequest {
    title: string;
    category: ProductRequestCategory;
    status: ProductRequestStatus;
    description?: string;
}
export interface LoginResponseModel {
    accessToken: string;
}
export interface LoginRequestModel {
    username?: string;
    password?: string;
}
export interface RegisterResponseModel {
    accessToken: string;
}
export interface RegisterRequestModel {
    username: string;
    password: string;
}
export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: {
        [name: string]: any;
    };
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
