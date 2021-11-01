"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCredentials = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const _1 = require(".");
const user_model_1 = require("./user.model");
let UserCredentials = class UserCredentials extends _1.BaseEntity {
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
], UserCredentials.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => user_model_1.User, { name: 'user_id' }, {
        name: 'user_id',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], UserCredentials.prototype, "userId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        name: 'auth_provider',
    }),
    tslib_1.__metadata("design:type", String)
], UserCredentials.prototype, "authProvider", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        name: 'auth_id',
    }),
    tslib_1.__metadata("design:type", String)
], UserCredentials.prototype, "authId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        name: 'auth_token',
    }),
    tslib_1.__metadata("design:type", String)
], UserCredentials.prototype, "authToken", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], UserCredentials.prototype, "password", void 0);
UserCredentials = tslib_1.__decorate([
    repository_1.model({
        name: 'user_credentials',
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], UserCredentials);
exports.UserCredentials = UserCredentials;
//# sourceMappingURL=user-credentials.model.js.map