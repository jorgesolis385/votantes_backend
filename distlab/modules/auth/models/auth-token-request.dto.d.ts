import { Model } from '@loopback/repository';
export declare class AuthTokenRequest extends Model {
    code: string;
    clientId: string;
    username: string;
    constructor(data?: Partial<AuthTokenRequest>);
}
