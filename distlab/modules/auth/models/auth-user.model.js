"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUser = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../../models");
let AuthUser = class AuthUser extends models_1.User {
    constructor(data) {
        super(data);
        this.permissions = [];
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AuthUser.prototype, "userTenantId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'array',
        itemType: 'string',
    }),
    tslib_1.__metadata("design:type", Array)
], AuthUser.prototype, "permissions", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AuthUser.prototype, "role", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: models_1.Tenant,
        required: true,
    }),
    tslib_1.__metadata("design:type", models_1.Tenant)
], AuthUser.prototype, "tenant", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], AuthUser.prototype, "externalAuthToken", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], AuthUser.prototype, "externalRefreshToken", void 0);
AuthUser = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], AuthUser);
exports.AuthUser = AuthUser;
//# sourceMappingURL=auth-user.model.js.map