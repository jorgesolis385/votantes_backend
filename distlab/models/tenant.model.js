"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tenant = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const user_modifiable_entity_model_1 = require("./user-modifiable-entity.model");
let Tenant = class Tenant extends user_modifiable_entity_model_1.UserModifiableEntity {
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
], Tenant.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Tenant.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Tenant.prototype, "type", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Tenant.prototype, "address1", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Tenant.prototype, "address2", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Tenant.prototype, "address3", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Tenant.prototype, "address4", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Tenant.prototype, "city", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Tenant.prototype, "state", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Tenant.prototype, "zip", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Tenant.prototype, "country", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        default: 'active',
    }),
    tslib_1.__metadata("design:type", String)
], Tenant.prototype, "status", void 0);
Tenant = tslib_1.__decorate([
    repository_1.model({
        name: 'tenants',
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Tenant);
exports.Tenant = Tenant;
//# sourceMappingURL=tenant.model.js.map