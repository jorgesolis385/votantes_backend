"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTenantPermission = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const user_modifiable_entity_model_1 = require("./user-modifiable-entity.model");
const user_tenant_model_1 = require("./user-tenant.model");
let UserTenantPermission = class UserTenantPermission extends user_modifiable_entity_model_1.UserModifiableEntity {
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
], UserTenantPermission.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => user_tenant_model_1.UserTenant, { name: 'user_tenant_id' }, {
        name: 'user_tenant_id',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], UserTenantPermission.prototype, "userTenantId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], UserTenantPermission.prototype, "permission", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
        default: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserTenantPermission.prototype, "allowed", void 0);
UserTenantPermission = tslib_1.__decorate([
    repository_1.model({
        name: 'user_tenant_permissions',
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], UserTenantPermission);
exports.UserTenantPermission = UserTenantPermission;
//# sourceMappingURL=user-tenant-permission.model.js.map