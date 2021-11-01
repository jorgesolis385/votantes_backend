import { Tenant, User } from '../../../models';
export declare class AuthUser extends User {
    userTenantId: number;
    permissions: string[];
    role: string;
    tenant: Tenant;
    externalAuthToken?: string;
    externalRefreshToken?: string;
    constructor(data?: Partial<AuthUser>);
}
