"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedToken = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let RevokedToken = class RevokedToken extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], RevokedToken.prototype, "token", void 0);
RevokedToken = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], RevokedToken);
exports.RevokedToken = RevokedToken;
//# sourceMappingURL=revoked-token.model.js.map