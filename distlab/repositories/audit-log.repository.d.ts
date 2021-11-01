import { DefaultCrudRepository } from '@loopback/repository';
import { AuditLog } from '../models';
import { AuditdbDataSource } from '../datasources';
export declare class AuditLogRepository extends DefaultCrudRepository<AuditLog, typeof AuditLog.prototype.id> {
    constructor(dataSource: AuditdbDataSource);
}
