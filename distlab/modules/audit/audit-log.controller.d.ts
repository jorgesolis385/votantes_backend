import { Count, Filter, Where } from '@loopback/repository';
import { AuditLog } from '../../models';
import { AuditLogRepository } from '../../repositories';
export declare class AuditLogController {
    auditLogRepository: AuditLogRepository;
    constructor(auditLogRepository: AuditLogRepository);
    create(auditLog: AuditLog): Promise<AuditLog>;
    count(where?: Where<AuditLog>): Promise<Count>;
    find(filter?: Filter<AuditLog>): Promise<AuditLog[]>;
    updateAll(auditLog: AuditLog, where?: Where<AuditLog>): Promise<Count>;
    findById(id: number): Promise<AuditLog>;
    updateById(id: number, auditLog: AuditLog): Promise<void>;
    replaceById(id: number, auditLog: AuditLog): Promise<void>;
    deleteById(id: number): Promise<void>;
}
