"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleOauth2VerifyProvider = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../../../models");
const repositories_1 = require("../../../repositories");
const auth_user_model_1 = require("../models/auth-user.model");
let GoogleOauth2VerifyProvider = class GoogleOauth2VerifyProvider {
    constructor(userRepository, userCredsRepository) {
        this.userRepository = userRepository;
        this.userCredsRepository = userCredsRepository;
    }
    value() {
        return async (accessToken, refreshToken, profile) => {
            const user = await this.userRepository.findOne({
                where: {
                    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                    email: profile._json.email,
                },
            });
            if (!user) {
                throw new rest_1.HttpErrors.Unauthorized("Invalid Credentials" /* InvalidCredentials */);
            }
            const creds = await this.userCredsRepository.findOne({
                where: {
                    userId: user.id,
                },
            });
            if (!creds ||
                creds.authProvider !== 'google' ||
                creds.authId !== profile.id) {
                throw new rest_1.HttpErrors.Unauthorized("Invalid Credentials" /* InvalidCredentials */);
            }
            const authUser = new auth_user_model_1.AuthUser(user);
            authUser.permissions = [];
            authUser.externalAuthToken = accessToken;
            authUser.externalRefreshToken = refreshToken;
            authUser.tenant = new models_1.Tenant({ id: user.defaultTenant });
            return authUser;
        };
    }
};
GoogleOauth2VerifyProvider = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.UserRepository)),
    tslib_1.__param(1, repository_1.repository(repositories_1.UserCredentialsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository,
        repositories_1.UserCredentialsRepository])
], GoogleOauth2VerifyProvider);
exports.GoogleOauth2VerifyProvider = GoogleOauth2VerifyProvider;
//# sourceMappingURL=google-oauth2-verify.provider.js.map