import { Count, Filter, Where } from '@loopback/repository';
import { User } from '../../models';
import { UserRepository, UserTenantRepository } from '../../repositories';
export declare class UserController {
    userRepository: UserRepository;
    userTenantRepo: UserTenantRepository;
    constructor(userRepository: UserRepository, userTenantRepo: UserTenantRepository);
    create(user: User): Promise<User>;
    count(where?: Where<User>): Promise<Count>;
    find(filter?: Filter<User>): Promise<User[]>;
    updateAll(user: User, where?: Where<User>): Promise<Count>;
    findById(id: number): Promise<User>;
    updateById(id: number, user: User): Promise<void>;
    replaceById(id: number, user: User): Promise<void>;
    deleteById(id: number): Promise<void>;
}
