import { Getter } from '@loopback/core';
import { PgdbDataSource } from '../datasources';
import { Tenant } from '../models';
import { AuthUser } from '../modules/auth';
import { DefaultUserModifyCrudRepository } from './default-user-modify-crud.repository.base';
export declare class TenantRepository extends DefaultUserModifyCrudRepository<Tenant, typeof Tenant.prototype.id> {
    protected readonly getCurrentUser: Getter<AuthUser | undefined>;
    constructor(dataSource: PgdbDataSource, getCurrentUser: Getter<AuthUser | undefined>);
}
