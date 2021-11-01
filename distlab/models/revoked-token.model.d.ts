import { Entity } from '@loopback/repository';
export declare class RevokedToken extends Entity {
    token: string;
    constructor(data?: Partial<RevokedToken>);
}
