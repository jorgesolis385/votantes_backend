import { BaseEntity } from '.';
import { UserWithRelations } from './user.model';
export declare class UserCredentials extends BaseEntity {
    id?: number;
    userId: number;
    authProvider: string;
    authId?: string;
    authToken?: string;
    password?: string;
    constructor(data?: Partial<UserCredentials>);
}
export interface UserCredentialsRelations {
    user: UserWithRelations;
}
export declare type UserCredentialsWithRelations = UserCredentials & UserCredentialsRelations;
