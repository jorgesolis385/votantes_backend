"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTenant = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const base_entity_model_1 = require("./base-entity.model");
const tenant_model_1 = require("./tenant.model");
const user_model_1 = require("./user.model");
const role_model_1 = require("./role.model");
let UserTenant = class UserTenant extends base_entity_model_1.BaseEntity {
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
], UserTenant.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => user_model_1.User, { name: 'user_id' }, {
        name: 'user_id',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], UserTenant.prototype, "userId", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => tenant_model_1.Tenant, { name: 'tenant_id' }, {
        name: 'tenant_id',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], UserTenant.prototype, "tenantId", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => role_model_1.Role, { name: 'role_id' }, {
        name: 'role_id',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], UserTenant.prototype, "roleId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        default: 'active',
    }),
    tslib_1.__metadata("design:type", String)
], UserTenant.prototype, "status", void 0);
UserTenant = tslib_1.__decorate([
    repository_1.model({
        name: 'user_tenants',
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], UserTenant);
exports.UserTenant = UserTenant;
//# sourceMappingURL=user-tenant.model.js.map