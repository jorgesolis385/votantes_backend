"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTenantRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
const default_soft_crud_repository_base_1 = require("./default-soft-crud.repository.base");
const role_repository_1 = require("./role.repository");
const tenant_repository_1 = require("./tenant.repository");
const user_repository_1 = require("./user.repository");
const rest_1 = require("@loopback/rest");
let UserTenantRepository = class UserTenantRepository extends default_soft_crud_repository_base_1.DefaultSoftCrudRepository {
    constructor(dataSource, tenantRepositoryGetter, userRepositoryGetter, roleRepositoryGetter, roleRepo) {
        super(models_1.UserTenant, dataSource);
        this.roleRepo = roleRepo;
        this.tenant = this.createBelongsToAccessorFor('tenant_id', tenantRepositoryGetter);
        this.user = this.createBelongsToAccessorFor('user_id', userRepositoryGetter);
        this.role = this.createBelongsToAccessorFor('role_id', roleRepositoryGetter);
    }
    async create(user) {
        if (!user.id || !user.defaultTenant) {
            throw new rest_1.HttpErrors.UnprocessableEntity('User Id or Default Tenant Id is missing in the request parameters');
        }
        const userTenant = new models_1.UserTenant();
        userTenant.userId = user.id;
        userTenant.tenantId = user.defaultTenant;
        const role = await this.roleRepo.findOne({
            where: {
                name: process.env.DEFAULT_ROLE,
            },
        });
        if (role === null || role === void 0 ? void 0 : role.id) {
            userTenant.roleId = role.id;
        }
        else {
            throw new rest_1.HttpErrors.UnprocessableEntity('Failed to set default role.');
        }
        return super.create(userTenant);
    }
};
UserTenantRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.pgdb')),
    tslib_1.__param(1, repository_1.repository.getter(tenant_repository_1.TenantRepository)),
    tslib_1.__param(2, repository_1.repository.getter(user_repository_1.UserRepository)),
    tslib_1.__param(3, repository_1.repository.getter(role_repository_1.RoleRepository)),
    tslib_1.__param(4, repository_1.repository(role_repository_1.RoleRepository)),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PgdbDataSource, Function, Function, Function, role_repository_1.RoleRepository])
], UserTenantRepository);
exports.UserTenantRepository = UserTenantRepository;
//# sourceMappingURL=user-tenant.repository.js.map