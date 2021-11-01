import { UserModifiableEntity } from './user-modifiable-entity.model';
import { TenantType } from '../modules/user-tenants/tenant-type.enum';
export declare class Tenant extends UserModifiableEntity {
    id?: number;
    name: string;
    type: TenantType;
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    status: string;
    constructor(data?: Partial<Tenant>);
}
export interface TenantRelations {
}
export declare type TenantWithRelations = Tenant;
