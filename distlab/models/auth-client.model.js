"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthClient = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const base_entity_model_1 = require("./base-entity.model");
let AuthClient = class AuthClient extends base_entity_model_1.BaseEntity {
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
], AuthClient.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        name: 'client_id',
    }),
    tslib_1.__metadata("design:type", String)
], AuthClient.prototype, "clientId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        name: 'client_secret',
    }),
    tslib_1.__metadata("design:type", String)
], AuthClient.prototype, "clientSecret", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AuthClient.prototype, "secret", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        name: 'redirect_url',
    }),
    tslib_1.__metadata("design:type", String)
], AuthClient.prototype, "redirectUrl", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'array',
        itemType: 'number',
        name: 'user_ids',
    }),
    tslib_1.__metadata("design:type", Array)
], AuthClient.prototype, "userIds", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        name: 'access_token_expiration',
    }),
    tslib_1.__metadata("design:type", Number)
], AuthClient.prototype, "accessTokenExpiration", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        name: 'refresh_token_expiration',
    }),
    tslib_1.__metadata("design:type", Number)
], AuthClient.prototype, "refreshTokenExpiration", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        name: 'auth_code_expiration',
    }),
    tslib_1.__metadata("design:type", Number)
], AuthClient.prototype, "authCodeExpiration", void 0);
AuthClient = tslib_1.__decorate([
    repository_1.model({
        name: 'auth_clients',
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], AuthClient);
exports.AuthClient = AuthClient;
//# sourceMappingURL=auth-client.model.js.map