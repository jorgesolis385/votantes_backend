"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceOwnerVerifyProvider = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const repositories_1 = require("../../../repositories");
const rest_1 = require("@loopback/rest");
let ResourceOwnerVerifyProvider = class ResourceOwnerVerifyProvider {
    constructor(userRepository, authClientRepository) {
        this.userRepository = userRepository;
        this.authClientRepository = authClientRepository;
    }
    value() {
        return async (clientId, clientSecret, username, password) => {
            const user = await this.userRepository.verifyPassword(username, password);
            if (!user) {
                throw new rest_1.HttpErrors.Unauthorized("Invalid Credentials" /* InvalidCredentials */);
            }
            const client = await this.authClientRepository.findOne({
                where: {
                    clientId,
                },
            });
            if (!client || client.userIds.indexOf(user.id || 0) < 0) {
                throw new rest_1.HttpErrors.Unauthorized("Client Invalid" /* ClientInvalid */);
            }
            else if (!client.clientSecret || client.clientSecret !== clientSecret) {
                throw new rest_1.HttpErrors.Unauthorized("Client Verification Failed" /* ClientVerificationFailed */);
            }
            return {
                client,
                user,
            };
        };
    }
};
ResourceOwnerVerifyProvider = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.UserRepository)),
    tslib_1.__param(1, repository_1.repository(repositories_1.AuthClientRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository,
        repositories_1.AuthClientRepository])
], ResourceOwnerVerifyProvider);
exports.ResourceOwnerVerifyProvider = ResourceOwnerVerifyProvider;
//# sourceMappingURL=resource-owner-verify.provider.js.map