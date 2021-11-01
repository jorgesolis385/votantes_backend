"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRefreshTokenRequest = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let AuthRefreshTokenRequest = class AuthRefreshTokenRequest extends repository_1.Model {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AuthRefreshTokenRequest.prototype, "refreshToken", void 0);
AuthRefreshTokenRequest = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], AuthRefreshTokenRequest);
exports.AuthRefreshTokenRequest = AuthRefreshTokenRequest;
//# sourceMappingURL=auth-refresh-token-request.dto.js.map