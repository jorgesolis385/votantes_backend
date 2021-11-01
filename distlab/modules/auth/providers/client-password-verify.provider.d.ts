import { Provider } from '@loopback/context';
import { VerifyFunction } from 'loopback4-authentication';
import { AuthClientRepository } from '../../../repositories';
export declare class ClientPasswordVerifyProvider implements Provider<VerifyFunction.OauthClientPasswordFn> {
    authClientRepository: AuthClientRepository;
    constructor(authClientRepository: AuthClientRepository);
    value(): VerifyFunction.OauthClientPasswordFn;
}
