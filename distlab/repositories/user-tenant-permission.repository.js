"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTenantPermissionRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const loopback4_authentication_1 = require("loopback4-authentication");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
const default_user_modify_crud_repository_base_1 = require("./default-user-modify-crud.repository.base");
const user_tenant_repository_1 = require("./user-tenant.repository");
let UserTenantPermissionRepository = class UserTenantPermissionRepository extends default_user_modify_crud_repository_base_1.DefaultUserModifyCrudRepository {
    constructor(dataSource, utRepositoryGetter, getCurrentUser) {
        super(models_1.UserTenantPermission, dataSource, getCurrentUser);
        this.getCurrentUser = getCurrentUser;
        this.userTenant = this.createBelongsToAccessorFor('user_tenant_id', utRepositoryGetter);
    }
};
UserTenantPermissionRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.pgdb')),
    tslib_1.__param(1, repository_1.repository.getter(user_tenant_repository_1.UserTenantRepository)),
    tslib_1.__param(2, core_1.inject.getter(loopback4_authentication_1.AuthenticationBindings.CURRENT_USER)),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PgdbDataSource, Function, Function])
], UserTenantPermissionRepository);
exports.UserTenantPermissionRepository = UserTenantPermissionRepository;
//# sourceMappingURL=user-tenant-permission.repository.js.map