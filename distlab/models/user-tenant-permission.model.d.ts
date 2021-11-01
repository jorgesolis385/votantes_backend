import { UserModifiableEntity } from './user-modifiable-entity.model';
import { UserTenantWithRelations } from './user-tenant.model';
import { UserPermission } from 'loopback4-authorization';
export declare class UserTenantPermission extends UserModifiableEntity implements UserPermission<string> {
    id?: number;
    userTenantId: number;
    permission: string;
    allowed: boolean;
    constructor(data?: Partial<UserTenantPermission>);
}
export interface UserTenantPermissionRelations {
    userTenant: UserTenantWithRelations;
}
export declare type UserTenantPermissionWithRelations = UserTenantPermission & UserTenantPermissionRelations;
