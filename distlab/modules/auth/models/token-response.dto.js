"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenResponse = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let TokenResponse = class TokenResponse extends repository_1.Model {
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
], TokenResponse.prototype, "accessToken", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], TokenResponse.prototype, "refreshToken", void 0);
TokenResponse = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], TokenResponse);
exports.TokenResponse = TokenResponse;
//# sourceMappingURL=token-response.dto.js.map