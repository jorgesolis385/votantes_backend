import { RoleType } from '../modules/roles/role.enum';
import { BaseEntity } from './base-entity.model';
export declare class Role extends BaseEntity {
    id?: number;
    name: string;
    permissions: string[];
    roleKey: RoleType;
    constructor(data?: Partial<Role>);
}
export interface RoleRelations {
}
export declare type RoleWithRelations = Role;
