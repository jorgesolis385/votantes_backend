import { Model } from '@loopback/repository';
export declare class LoginRequest extends Model {
    client_id: string;
    client_secret: string;
    username: string;
    password: string;
    constructor(data?: Partial<LoginRequest>);
}
