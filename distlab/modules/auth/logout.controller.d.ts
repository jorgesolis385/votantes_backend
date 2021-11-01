/// <reference types="express" />
import { Request } from '@loopback/rest';
import { RevokedTokenRepository } from '../../repositories';
export declare class LogoutController {
    private readonly req;
    private readonly revokedTokens;
    constructor(req: Request, revokedTokens: RevokedTokenRepository);
    logout(auth: string): Promise<boolean>;
}
