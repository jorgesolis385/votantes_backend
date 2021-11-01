"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLog = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let AuditLog = class AuditLog extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AuditLog.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        name: 'operation_name',
    }),
    tslib_1.__metadata("design:type", String)
], AuditLog.prototype, "operationName", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
        name: 'operation_time',
    }),
    tslib_1.__metadata("design:type", String)
], AuditLog.prototype, "operationTime", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        name: 'table_name',
    }),
    tslib_1.__metadata("design:type", String)
], AuditLog.prototype, "tableName", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        name: 'log_type',
    }),
    tslib_1.__metadata("design:type", String)
], AuditLog.prototype, "logType", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        name: 'entity_id',
    }),
    tslib_1.__metadata("design:type", String)
], AuditLog.prototype, "entityId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        name: 'user_id',
    }),
    tslib_1.__metadata("design:type", String)
], AuditLog.prototype, "userId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'object',
    }),
    tslib_1.__metadata("design:type", Object)
], AuditLog.prototype, "before", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'object',
    }),
    tslib_1.__metadata("design:type", Object)
], AuditLog.prototype, "after", void 0);
AuditLog = tslib_1.__decorate([
    repository_1.model({
        name: 'audit_logs',
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], AuditLog);
exports.AuditLog = AuditLog;
//# sourceMappingURL=audit-log.model.js.map