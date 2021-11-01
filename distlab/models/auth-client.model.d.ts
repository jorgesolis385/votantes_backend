import { IAuthClient } from 'loopback4-authentication';
import { BaseEntity } from './base-entity.model';
export declare class AuthClient extends BaseEntity implements IAuthClient {
    id?: number;
    clientId: string;
    clientSecret: string;
    secret: string;
    redirectUrl?: string;
    userIds: number[];
    accessTokenExpiration: number;
    refreshTokenExpiration: number;
    authCodeExpiration: number;
    constructor(data?: Partial<AuthClient>);
}
