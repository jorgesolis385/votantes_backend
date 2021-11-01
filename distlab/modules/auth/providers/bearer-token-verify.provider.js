"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BearerTokenVerifyProvider = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const jsonwebtoken_1 = require("jsonwebtoken");
const repositories_1 = require("../../../repositories");
let BearerTokenVerifyProvider = class BearerTokenVerifyProvider {
    constructor(revokedTokenRepository) {
        this.revokedTokenRepository = revokedTokenRepository;
    }
    value() {
        return async (token) => {
            if (token && (await this.revokedTokenRepository.get(token))) {
                throw new rest_1.HttpErrors.Unauthorized("Token is revoked" /* TokenRevoked */);
            }
            const user = jsonwebtoken_1.verify(token, process.env.JWT_SECRET, {
                issuer: process.env.JWT_ISSUER,
            });
            return user;
        };
    }
};
BearerTokenVerifyProvider = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.RevokedTokenRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RevokedTokenRepository])
], BearerTokenVerifyProvider);
exports.BearerTokenVerifyProvider = BearerTokenVerifyProvider;
//# sourceMappingURL=bearer-token-verify.provider.js.map