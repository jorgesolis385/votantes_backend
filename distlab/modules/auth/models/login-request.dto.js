"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequest = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let LoginRequest = class LoginRequest extends repository_1.Model {
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
], LoginRequest.prototype, "client_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], LoginRequest.prototype, "client_secret", void 0);
tslib_1.__decorate([
    repository_1.property({ type: 'string', required: true }),
    tslib_1.__metadata("design:type", String)
], LoginRequest.prototype, "username", void 0);
tslib_1.__decorate([
    repository_1.property({ type: 'string', required: true }),
    tslib_1.__metadata("design:type", String)
], LoginRequest.prototype, "password", void 0);
LoginRequest = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], LoginRequest);
exports.LoginRequest = LoginRequest;
//# sourceMappingURL=login-request.dto.js.map