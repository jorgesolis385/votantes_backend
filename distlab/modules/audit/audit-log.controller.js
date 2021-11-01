"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../../models");
const repositories_1 = require("../../repositories");
const loopback4_authentication_1 = require("loopback4-authentication");
const loopback4_authorization_1 = require("loopback4-authorization");
let AuditLogController = class AuditLogController {
    constructor(auditLogRepository) {
        this.auditLogRepository = auditLogRepository;
    }
    async create(auditLog) {
        return this.auditLogRepository.create(auditLog);
    }
    async count(where) {
        return this.auditLogRepository.count(where);
    }
    async find(filter) {
        return this.auditLogRepository.find(filter);
    }
    async updateAll(auditLog, where) {
        return this.auditLogRepository.updateAll(auditLog, where);
    }
    async findById(id) {
        return this.auditLogRepository.findById(id);
    }
    async updateById(id, auditLog) {
        await this.auditLogRepository.updateById(id, auditLog);
    }
    async replaceById(id, auditLog) {
        await this.auditLogRepository.replaceById(id, auditLog);
    }
    async deleteById(id) {
        await this.auditLogRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["CreateAudit" /* CreateAudit */] }),
    rest_1.post('/audit-logs', {
        responses: {
            '200': {
                description: 'AuditLog model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.AuditLog } } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.AuditLog]),
    tslib_1.__metadata("design:returntype", Promise)
], AuditLogController.prototype, "create", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["ViewAudit" /* ViewAudit */] }),
    rest_1.get('/audit-logs/count', {
        responses: {
            '200': {
                description: 'AuditLog model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.AuditLog))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuditLogController.prototype, "count", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["ViewAudit" /* ViewAudit */] }),
    rest_1.get('/audit-logs', {
        responses: {
            '200': {
                description: 'Array of AuditLog model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.AuditLog } },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.AuditLog))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuditLogController.prototype, "find", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["UpdateAudit" /* UpdateAudit */] }),
    rest_1.patch('/audit-logs', {
        responses: {
            '200': {
                description: 'AuditLog PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody()),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.AuditLog))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.AuditLog, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuditLogController.prototype, "updateAll", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["ViewAudit" /* ViewAudit */] }),
    rest_1.get('/audit-logs/{id}', {
        responses: {
            '200': {
                description: 'AuditLog model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.AuditLog } } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AuditLogController.prototype, "findById", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["UpdateAudit" /* UpdateAudit */] }),
    rest_1.patch('/audit-logs/{id}', {
        responses: {
            '204': {
                description: 'AuditLog PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.AuditLog]),
    tslib_1.__metadata("design:returntype", Promise)
], AuditLogController.prototype, "updateById", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["UpdateAudit" /* UpdateAudit */] }),
    rest_1.put('/audit-logs/{id}', {
        responses: {
            '204': {
                description: 'AuditLog PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.AuditLog]),
    tslib_1.__metadata("design:returntype", Promise)
], AuditLogController.prototype, "replaceById", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["DeleteAudit" /* DeleteAudit */] }),
    rest_1.del('/audit-logs/{id}', {
        responses: {
            '204': {
                description: 'AuditLog DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AuditLogController.prototype, "deleteById", null);
AuditLogController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AuditLogRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AuditLogRepository])
], AuditLogController);
exports.AuditLogController = AuditLogController;
//# sourceMappingURL=audit-log.controller.js.map