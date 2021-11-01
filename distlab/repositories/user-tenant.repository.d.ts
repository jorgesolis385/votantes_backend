import { Getter } from '@loopback/core';
import { BelongsToAccessor } from '@loopback/repository';
import { PgdbDataSource } from '../datasources';
import { Role, Tenant, User, UserTenant, UserTenantRelations } from '../models';
import { DefaultSoftCrudRepository } from './default-soft-crud.repository.base';
import { RoleRepository } from './role.repository';
import { TenantRepository } from './tenant.repository';
import { UserRepository } from './user.repository';
export declare class UserTenantRepository extends DefaultSoftCrudRepository<UserTenant, typeof UserTenant.prototype.id, UserTenantRelations> {
    roleRepo: RoleRepository;
    readonly tenant: BelongsToAccessor<Tenant, typeof UserTenant.prototype.id>;
    readonly user: BelongsToAccessor<User, typeof UserTenant.prototype.id>;
    readonly role: BelongsToAccessor<Role, typeof UserTenant.prototype.id>;
    constructor(dataSource: PgdbDataSource, tenantRepositoryGetter: Getter<TenantRepository>, userRepositoryGetter: Getter<UserRepository>, roleRepositoryGetter: Getter<RoleRepository>, roleRepo: RoleRepository);
    create(user: User): Promise<UserTenant>;
}
