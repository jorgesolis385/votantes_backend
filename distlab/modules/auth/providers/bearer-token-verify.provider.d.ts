import { Provider } from '@loopback/context';
import { VerifyFunction } from 'loopback4-authentication';
import { RevokedTokenRepository } from '../../../repositories';
export declare class BearerTokenVerifyProvider implements Provider<VerifyFunction.BearerFn> {
    revokedTokenRepository: RevokedTokenRepository;
    constructor(revokedTokenRepository: RevokedTokenRepository);
    value(): VerifyFunction.BearerFn;
}
