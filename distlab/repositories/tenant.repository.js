"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const loopback4_authentication_1 = require("loopback4-authentication");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
const default_user_modify_crud_repository_base_1 = require("./default-user-modify-crud.repository.base");
let TenantRepository = class TenantRepository extends default_user_modify_crud_repository_base_1.DefaultUserModifyCrudRepository {
    constructor(dataSource, getCurrentUser) {
        super(models_1.Tenant, dataSource, getCurrentUser);
        this.getCurrentUser = getCurrentUser;
    }
};
TenantRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.pgdb')),
    tslib_1.__param(1, core_1.inject.getter(loopback4_authentication_1.AuthenticationBindings.CURRENT_USER)),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PgdbDataSource, Function])
], TenantRepository);
exports.TenantRepository = TenantRepository;
//# sourceMappingURL=tenant.repository.js.map