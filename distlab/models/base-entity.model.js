"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
const tslib_1 = require("tslib");
const loopback4_soft_delete_1 = require("loopback4-soft-delete");
const repository_1 = require("@loopback/repository");
class BaseEntity extends loopback4_soft_delete_1.SoftDeleteEntity {
}
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: () => new Date(),
        name: 'created_on',
    }),
    tslib_1.__metadata("design:type", Date)
], BaseEntity.prototype, "createdOn", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: () => new Date(),
        name: 'modified_on',
    }),
    tslib_1.__metadata("design:type", Date)
], BaseEntity.prototype, "modifiedOn", void 0);
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=base-entity.model.js.map