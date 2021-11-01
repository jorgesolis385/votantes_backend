"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshToken = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let RefreshToken = class RefreshToken extends repository_1.Entity {
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
], RefreshToken.prototype, "clientId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], RefreshToken.prototype, "userId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], RefreshToken.prototype, "username", void 0);
RefreshToken = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], RefreshToken);
exports.RefreshToken = RefreshToken;
//# sourceMappingURL=refresh-token.model.js.map