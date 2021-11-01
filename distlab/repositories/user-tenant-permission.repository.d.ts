import { Getter } from '@loopback/core';
import { BelongsToAccessor } from '@loopback/repository';
import { PgdbDataSource } from '../datasources';
import { UserTenant, UserTenantPermission, UserTenantPermissionRelations } from '../models';
import { AuthUser } from '../modules/auth';
import { DefaultUserModifyCrudRepository } from './default-user-modify-crud.repository.base';
import { UserTenantRepository } from './user-tenant.repository';
export declare class UserTenantPermissionRepository extends DefaultUserModifyCrudRepository<UserTenantPermission, typeof UserTenantPermission.prototype.id, UserTenantPermissionRelations> {
    protected readonly getCurrentUser: Getter<AuthUser | undefined>;
    readonly userTenant: BelongsToAccessor<UserTenant, typeof UserTenantPermission.prototype.id>;
    constructor(dataSource: PgdbDataSource, utRepositoryGetter: Getter<UserTenantRepository>, getCurrentUser: Getter<AuthUser | undefined>);
}
