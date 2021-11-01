"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const user_credentials_model_1 = require("./user-credentials.model");
const user_modifiable_entity_model_1 = require("./user-modifiable-entity.model");
let User = class User extends user_modifiable_entity_model_1.UserModifiableEntity {
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
], User.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        name: 'first_name',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        name: 'last_name',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        name: 'middle_name',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "middleName", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "phone", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        name: 'default_tenant',
    }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "defaultTenant", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        name: 'last_login',
        postgresql: {
            column: 'last_login',
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => user_credentials_model_1.UserCredentials, { keyTo: 'userId' }),
    tslib_1.__metadata("design:type", user_credentials_model_1.UserCredentials)
], User.prototype, "credentials", void 0);
User = tslib_1.__decorate([
    repository_1.model({
        name: 'users',
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map