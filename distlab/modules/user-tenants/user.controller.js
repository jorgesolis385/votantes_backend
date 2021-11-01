"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const loopback4_authentication_1 = require("loopback4-authentication");
const loopback4_authorization_1 = require("loopback4-authorization");
const models_1 = require("../../models");
const repositories_1 = require("../../repositories");
let UserController = class UserController {
    constructor(userRepository, userTenantRepo) {
        this.userRepository = userRepository;
        this.userTenantRepo = userTenantRepo;
    }
    async create(user) {
        if (!user.id || !user.defaultTenant) {
            throw new rest_1.HttpErrors.UnprocessableEntity('User Id or Default Tenant Id is missing in the request parameters');
        }
        const response = await this.userRepository.create(user);
        await this.userTenantRepo.create(user);
        return response;
    }
    async count(where) {
        return this.userRepository.count(where);
    }
    async find(filter) {
        return this.userRepository.find(filter);
    }
    async updateAll(user, where) {
        return this.userRepository.updateAll(user, where);
    }
    async findById(id) {
        return this.userRepository.findById(id);
    }
    async updateById(id, user) {
        await this.userRepository.updateById(id, user);
    }
    async replaceById(id, user) {
        await this.userRepository.replaceById(id, user);
    }
    async deleteById(id) {
        await this.userRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({
        permissions: ["CreateAnyUser" /* CreateAnyUser */, "CreateTenantUser" /* CreateTenantUser */],
    }),
    rest_1.post('/users', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.User } } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.User]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({
        permissions: [
            "ViewAnyUser" /* ViewAnyUser */,
            "ViewOwnUser" /* ViewOwnUser */,
            "ViewTenantUser" /* ViewTenantUser */,
        ],
    }),
    rest_1.get('/users/count', {
        responses: {
            '200': {
                description: 'User model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.User))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "count", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({
        permissions: [
            "ViewAnyUser" /* ViewAnyUser */,
            "ViewOwnUser" /* ViewOwnUser */,
            "ViewTenantUser" /* ViewTenantUser */,
        ],
    }),
    rest_1.get('/users', {
        responses: {
            '200': {
                description: 'Array of User model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.User } },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.User))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "find", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({
        permissions: [
            "UpdateAnyUser" /* UpdateAnyUser */,
            "UpdateOwnUser" /* UpdateOwnUser */,
            "UpdateTenantUser" /* UpdateTenantUser */,
        ],
    }),
    rest_1.patch('/users', {
        responses: {
            '200': {
                description: 'User PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody()),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.User))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.User, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "updateAll", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({
        permissions: [
            "ViewAnyUser" /* ViewAnyUser */,
            "ViewOwnUser" /* ViewOwnUser */,
            "ViewTenantUser" /* ViewTenantUser */,
        ],
    }),
    rest_1.get('/users/{id}', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.User } } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "findById", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({
        permissions: [
            "UpdateAnyUser" /* UpdateAnyUser */,
            "UpdateOwnUser" /* UpdateOwnUser */,
            "UpdateTenantUser" /* UpdateTenantUser */,
        ],
    }),
    rest_1.patch('/users/{id}', {
        responses: {
            '204': {
                description: 'User PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.User]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "updateById", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({
        permissions: [
            "UpdateAnyUser" /* UpdateAnyUser */,
            "UpdateOwnUser" /* UpdateOwnUser */,
            "UpdateTenantUser" /* UpdateTenantUser */,
        ],
    }),
    rest_1.put('/users/{id}', {
        responses: {
            '204': {
                description: 'User PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.User]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "replaceById", null);
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({
        permissions: ["DeleteAnyUser" /* DeleteAnyUser */, "DeleteTenantUser" /* DeleteTenantUser */],
    }),
    rest_1.del('/users/{id}', {
        responses: {
            '204': {
                description: 'User DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "deleteById", null);
UserController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.UserRepository)),
    tslib_1.__param(1, repository_1.repository(repositories_1.UserTenantRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository,
        repositories_1.UserTenantRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map