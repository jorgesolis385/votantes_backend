import { Provider } from '@loopback/context';
import { VerifyFunction } from 'loopback4-authentication';
import { UserCredentialsRepository, UserRepository } from '../../../repositories';
export declare class GoogleOauth2VerifyProvider implements Provider<VerifyFunction.GoogleAuthFn> {
    userRepository: UserRepository;
    userCredsRepository: UserCredentialsRepository;
    constructor(userRepository: UserRepository, userCredsRepository: UserCredentialsRepository);
    value(): VerifyFunction.GoogleAuthFn;
}
