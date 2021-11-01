"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModifiableEntity = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const base_entity_model_1 = require("./base-entity.model");
class UserModifiableEntity extends base_entity_model_1.BaseEntity {
}
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        name: 'created_by',
    }),
    tslib_1.__metadata("design:type", Number)
], UserModifiableEntity.prototype, "createdBy", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        name: 'modified_by',
    }),
    tslib_1.__metadata("design:type", Number)
], UserModifiableEntity.prototype, "modifiedBy", void 0);
exports.UserModifiableEntity = UserModifiableEntity;
//# sourceMappingURL=user-modifiable-entity.model.js.map