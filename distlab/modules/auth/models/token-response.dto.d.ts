import { Model } from '@loopback/repository';
export declare class TokenResponse extends Model {
    accessToken: string;
    refreshToken: string;
    constructor(data?: Partial<TokenResponse>);
}
