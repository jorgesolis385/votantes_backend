import { Model } from '@loopback/repository';
export declare class ClientAuthRequest extends Model {
    client_id: string;
    client_secret: string;
    constructor(data?: Partial<ClientAuthRequest>);
}
