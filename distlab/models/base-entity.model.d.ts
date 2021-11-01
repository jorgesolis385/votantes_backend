import { SoftDeleteEntity } from 'loopback4-soft-delete';
export declare abstract class BaseEntity extends SoftDeleteEntity {
    createdOn?: Date;
    modifiedOn?: Date;
}
