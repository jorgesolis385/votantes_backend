import { Provider } from '@loopback/context';
import { VerifyFunction } from 'loopback4-authentication';
import { UserRepository, AuthClientRepository } from '../../../repositories';
export declare class ResourceOwnerVerifyProvider implements Provider<VerifyFunction.ResourceOwnerPasswordFn> {
    userRepository: UserRepository;
    authClientRepository: AuthClientRepository;
    constructor(userRepository: UserRepository, authClientRepository: AuthClientRepository);
    value(): VerifyFunction.ResourceOwnerPasswordFn;
}
