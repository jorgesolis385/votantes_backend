"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultUserModifyCrudRepository = void 0;
const loopback4_soft_delete_1 = require("loopback4-soft-delete");
const rest_1 = require("@loopback/rest");
class DefaultUserModifyCrudRepository extends loopback4_soft_delete_1.SoftCrudRepository {
    constructor(entityClass, dataSource, getCurrentUser) {
        super(entityClass, dataSource);
        this.getCurrentUser = getCurrentUser;
    }
    async create(entity, options) {
        const currentUser = await this.getCurrentUser();
        if (!currentUser) {
            throw new rest_1.HttpErrors.Forbidden("Invalid Credentials" /* InvalidCredentials */);
        }
        entity.createdBy = currentUser.userTenantId;
        entity.modifiedBy = currentUser.userTenantId;
        return super.create(entity, options);
    }
    async createAll(entities, options) {
        const currentUser = await this.getCurrentUser();
        if (!currentUser) {
            throw new rest_1.HttpErrors.Forbidden("Invalid Credentials" /* InvalidCredentials */);
        }
        entities.forEach((entity) => {
            entity.createdBy = currentUser ? currentUser.userTenantId : 0;
            entity.modifiedBy = currentUser ? currentUser.userTenantId : 0;
        });
        return super.createAll(entities, options);
    }
    async save(entity, options) {
        const currentUser = await this.getCurrentUser();
        if (!currentUser) {
            throw new rest_1.HttpErrors.Forbidden("Invalid Credentials" /* InvalidCredentials */);
        }
        entity.modifiedBy = currentUser.userTenantId;
        return super.save(entity, options);
    }
    async update(entity, options) {
        const currentUser = await this.getCurrentUser();
        if (!currentUser) {
            throw new rest_1.HttpErrors.Forbidden("Invalid Credentials" /* InvalidCredentials */);
        }
        entity.modifiedBy = currentUser.userTenantId;
        return super.update(entity, options);
    }
    async updateAll(data, where, options) {
        const currentUser = await this.getCurrentUser();
        if (!currentUser) {
            throw new rest_1.HttpErrors.Forbidden("Invalid Credentials" /* InvalidCredentials */);
        }
        data.modifiedBy = currentUser.userTenantId;
        return super.updateAll(data, where, options);
    }
    async updateById(id, data, options) {
        const currentUser = await this.getCurrentUser();
        if (!currentUser) {
            throw new rest_1.HttpErrors.Forbidden("Invalid Credentials" /* InvalidCredentials */);
        }
        data.modifiedBy = currentUser.userTenantId;
        return super.updateById(id, data, options);
    }
    async replaceById(id, data, options) {
        const currentUser = await this.getCurrentUser();
        if (!currentUser) {
            throw new rest_1.HttpErrors.Forbidden("Invalid Credentials" /* InvalidCredentials */);
        }
        data.modifiedBy = currentUser.userTenantId;
        return super.replaceById(id, data, options);
    }
}
exports.DefaultUserModifyCrudRepository = DefaultUserModifyCrudRepository;
//# sourceMappingURL=default-user-modify-crud.repository.base.js.map