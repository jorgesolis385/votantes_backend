"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const base_entity_model_1 = require("./base-entity.model");
let Role = class Role extends base_entity_model_1.BaseEntity {
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
], Role.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'array',
        itemType: 'string',
    }),
    tslib_1.__metadata("design:type", Array)
], Role.prototype, "permissions", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        name: 'role_key',
    }),
    tslib_1.__metadata("design:type", Number)
], Role.prototype, "roleKey", void 0);
Role = tslib_1.__decorate([
    repository_1.model({
        name: 'roles',
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Role);
exports.Role = Role;
//# sourceMappingURL=role.model.js.map