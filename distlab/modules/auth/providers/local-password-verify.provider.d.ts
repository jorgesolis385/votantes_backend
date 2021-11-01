import { Provider } from '@loopback/context';
import { VerifyFunction } from 'loopback4-authentication';
import { UserRepository } from '../../../repositories';
export declare class LocalPasswordVerifyProvider implements Provider<VerifyFunction.LocalPasswordFn> {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    value(): VerifyFunction.LocalPasswordFn;
}
