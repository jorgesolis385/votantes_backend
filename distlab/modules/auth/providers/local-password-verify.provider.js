"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalPasswordVerifyProvider = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const repositories_1 = require("../../../repositories");
const auth_user_model_1 = require("../models/auth-user.model");
const models_1 = require("../../../models");
let LocalPasswordVerifyProvider = class LocalPasswordVerifyProvider {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    value() {
        return async (username, password) => {
            const user = new auth_user_model_1.AuthUser(await this.userRepository.verifyPassword(username, password));
            user.permissions = [];
            user.tenant = new models_1.Tenant({ id: user.defaultTenant });
            return user;
        };
    }
};
LocalPasswordVerifyProvider = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], LocalPasswordVerifyProvider);
exports.LocalPasswordVerifyProvider = LocalPasswordVerifyProvider;
//# sourceMappingURL=local-password-verify.provider.js.map