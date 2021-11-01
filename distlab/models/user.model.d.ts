import { IAuthUser } from 'loopback4-authentication';
import { UserCredentials, UserCredentialsWithRelations } from './user-credentials.model';
import { UserModifiableEntity } from './user-modifiable-entity.model';
export declare class User extends UserModifiableEntity implements IAuthUser {
    id?: number;
    firstName: string;
    lastName: string;
    middleName?: string;
    username: string;
    email?: string;
    phone?: string;
    defaultTenant: number;
    lastLogin?: string;
    credentials: UserCredentials;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
    credentials: UserCredentialsWithRelations;
}
export declare type UserWithRelations = User & UserRelations;
