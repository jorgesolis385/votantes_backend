import { Getter } from '@loopback/core';
import { DataObject, HasOneRepositoryFactory } from '@loopback/repository';
import { Options } from '@loopback/repository/src/common-types';
import { PgdbDataSource } from '../datasources';
import { User, UserRelations, UserCredentials } from '../models';
import { AuthUser } from '../modules/auth';
import { DefaultUserModifyCrudRepository } from './default-user-modify-crud.repository.base';
import { UserCredentialsRepository } from './user-credentials.repository';
export declare class UserRepository extends DefaultUserModifyCrudRepository<User, typeof User.prototype.id, UserRelations> {
    protected readonly getCurrentUser: Getter<AuthUser | undefined>;
    readonly credentials: HasOneRepositoryFactory<UserCredentials, typeof User.prototype.id>;
    constructor(dataSource: PgdbDataSource, getCurrentUser: Getter<AuthUser | undefined>, getUserCredsRepository: Getter<UserCredentialsRepository>);
    private readonly saltRounds;
    create(entity: DataObject<User>, options?: Options): Promise<User>;
    verifyPassword(username: string, password: string): Promise<User>;
    updatePassword(username: string, password: string, newPassword: string): Promise<User>;
}
