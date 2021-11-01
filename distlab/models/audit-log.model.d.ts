import { Entity } from '@loopback/repository';
export declare class AuditLog extends Entity {
    id?: number;
    operationName: string;
    operationTime: string;
    tableName: string;
    logType?: string;
    entityId?: string;
    userId?: string;
    before?: object;
    after?: object;
    constructor(data?: Partial<AuditLog>);
}
