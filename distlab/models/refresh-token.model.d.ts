import { Entity } from '@loopback/repository';
export declare class RefreshToken extends Entity {
    clientId: string;
    userId: number;
    username: string;
    constructor(data?: Partial<RefreshToken>);
}
