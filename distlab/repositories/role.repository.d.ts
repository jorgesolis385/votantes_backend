import { PgdbDataSource } from '../datasources';
import { Role } from '../models';
import { DefaultSoftCrudRepository } from './default-soft-crud.repository.base';
export declare class RoleRepository extends DefaultSoftCrudRepository<Role, typeof Role.prototype.id> {
    constructor(dataSource: PgdbDataSource);
}
