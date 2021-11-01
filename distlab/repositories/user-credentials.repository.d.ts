import { PgdbDataSource } from '../datasources';
import { UserCredentials, UserCredentialsRelations } from '../models';
import { DefaultSoftCrudRepository } from './default-soft-crud.repository.base';
export declare class UserCredentialsRepository extends DefaultSoftCrudRepository<UserCredentials, typeof UserCredentials.prototype.id, UserCredentialsRelations> {
    constructor(dataSource: PgdbDataSource);
}
