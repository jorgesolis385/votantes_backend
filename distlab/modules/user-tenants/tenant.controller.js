"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const loopback4_authentication_1 = require("loopback4-authentication");
const loopback4_authorization_1 = require("loopback4-authorization");
const models_1 = require("../../models");
const repositories_1 = require("../../repositories");
let TenantController = class TenantController {
    constructor(tenantRepository) {
        this.tenantRepository = tenantRepository;
    }
    async create(tenant) {
        return this.tenantRepository.create(tenant);
    }
    async count(where) {
        return this.tenantRepository.count(where);
    }
    async find(filter) {
        return this.tenantRepository.find(filter);
    }
    async updateAll(tenant, where) {
        return this.tenantRepository.updateAll(tenant, where);
    }
    async findById(id) {
        return this.tenantRepository.findById(id);
    }
    async updateById(id, tenant) {
        await this.tenantRepository.updateById(id, tenant);
    }
    async replaceById(id, tenant) {
        await this.tenantRepository.replaceById(id, tenant);
    }
    async deleteById(id) {
        await this.tenantRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["CreateTenant" /* CreateTenant */] }),
    rest_1.post('/tenants', {
        responses: {
            '200': {
                description: 'Tenant model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Tenant } } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Tenant]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantController.prototype, "create", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["ViewTenant" /* ViewTenant */] }),
    rest_1.get('/tenants/count', {
        responses: {
            '200': {
                description: 'Tenant model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Tenant))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantController.prototype, "count", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["ViewTenant" /* ViewTenant */] }),
    rest_1.get('/tenants', {
        responses: {
            '200': {
                description: 'Array of Tenant model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Tenant } },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Tenant))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantController.prototype, "find", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["UpdateTenant" /* UpdateTenant */] }),
    rest_1.patch('/tenants', {
        responses: {
            '200': {
                description: 'Tenant PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody()),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Tenant))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Tenant, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantController.prototype, "updateAll", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["ViewTenant" /* ViewTenant */] }),
    rest_1.get('/tenants/{id}', {
        responses: {
            '200': {
                description: 'Tenant model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Tenant } } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantController.prototype, "findById", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["UpdateTenant" /* UpdateTenant */] }),
    rest_1.patch('/tenants/{id}', {
        responses: {
            '204': {
                description: 'Tenant PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Tenant]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantController.prototype, "updateById", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["UpdateTenant" /* UpdateTenant */] }),
    rest_1.put('/tenants/{id}', {
        responses: {
            '204': {
                description: 'Tenant PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Tenant]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantController.prototype, "replaceById", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["DeleteTenant" /* DeleteTenant */] }),
    rest_1.del('/tenants/{id}', {
        responses: {
            '204': {
                description: 'Tenant DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantController.prototype, "deleteById", null);
TenantController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.TenantRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TenantRepository])
], TenantController);
exports.TenantController = TenantController;
//# sourceMappingURL=tenant.controller.js.map