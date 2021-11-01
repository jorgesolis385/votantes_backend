"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutController = void 0;
const tslib_1 = require("tslib");
const context_1 = require("@loopback/context");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const loopback4_authentication_1 = require("loopback4-authentication");
const loopback4_authorization_1 = require("loopback4-authorization");
const repositories_1 = require("../../repositories");
let LogoutController = class LogoutController {
    constructor(req, revokedTokens) {
        this.req = req;
        this.revokedTokens = revokedTokens;
    }
    async logout(auth) {
        try {
            const token = auth === null || auth === void 0 ? void 0 : auth.replace(/bearer /i, '');
            if (!token) {
                throw new rest_1.HttpErrors.Unauthorized("Token Invalid" /* TokenInvalid */);
            }
            await this.revokedTokens.set(token, { token });
        }
        catch (err) {
            throw new rest_1.HttpErrors.InternalServerError("Unknown Error" /* UnknownError */);
        }
        return true;
    }
};
tslib_1.__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize({ permissions: ['*'] }),
    rest_1.post('/logout'),
    tslib_1.__param(0, rest_1.param.header.string('Authorization')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], LogoutController.prototype, "logout", null);
LogoutController = tslib_1.__decorate([
    tslib_1.__param(0, context_1.inject(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__param(1, repository_1.repository(repositories_1.RevokedTokenRepository)),
    tslib_1.__metadata("design:paramtypes", [Object, repositories_1.RevokedTokenRepository])
], LogoutController);
exports.LogoutController = LogoutController;
//# sourceMappingURL=logout.controller.js.map