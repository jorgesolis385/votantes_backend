"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const loopback4_authentication_1 = require("loopback4-authentication");
const loopback4_authorization_1 = require("loopback4-authorization");
const models_1 = require("../../models");
const repositories_1 = require("../../repositories");
let RoleController = class RoleController {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async create(role) {
        return this.roleRepository.create(role);
    }
    async count(where) {
        return this.roleRepository.count(where);
    }
    async find(filter) {
        return this.roleRepository.find(filter);
    }
    async updateAll(role, where) {
        return this.roleRepository.updateAll(role, where);
    }
    async findById(id) {
        return this.roleRepository.findById(id);
    }
    async updateById(id, role) {
        await this.roleRepository.updateById(id, role);
    }
    async replaceById(id, role) {
        await this.roleRepository.replaceById(id, role);
    }
    async deleteById(id) {
        await this.roleRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["CreateRole" /* CreateRole */] }),
    rest_1.post('/roles', {
        responses: {
            '200': {
                description: 'Role model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Role } } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Role]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "create", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["ViewRole" /* ViewRole */] }),
    rest_1.get('/roles/count', {
        responses: {
            '200': {
                description: 'Role model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Role))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "count", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["ViewRole" /* ViewRole */] }),
    rest_1.get('/roles', {
        responses: {
            '200': {
                description: 'Array of Role model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Role } },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Role))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "find", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["UpdateRole" /* UpdateRole */] }),
    rest_1.patch('/roles', {
        responses: {
            '200': {
                description: 'Role PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody()),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Role))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Role, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "updateAll", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["ViewRole" /* ViewRole */] }),
    rest_1.get('/roles/{id}', {
        responses: {
            '200': {
                description: 'Role model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Role } } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "findById", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["UpdateRole" /* UpdateRole */] }),
    rest_1.patch('/roles/{id}', {
        responses: {
            '204': {
                description: 'Role PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Role]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "updateById", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["UpdateRole" /* UpdateRole */] }),
    rest_1.put('/roles/{id}', {
        responses: {
            '204': {
                description: 'Role PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Role]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "replaceById", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ["DeleteRole" /* DeleteRole */] }),
    rest_1.del('/roles/{id}', {
        responses: {
            '204': {
                description: 'Role DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "deleteById", null);
RoleController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.RoleRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RoleRepository])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=role.controller.js.map