"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let RefreshTokenRepository = class RefreshTokenRepository extends repository_1.DefaultKeyValueRepository {
    constructor(dataSource) {
        super(models_1.RefreshToken, dataSource);
    }
};
RefreshTokenRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.redis')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.RedisDataSource])
], RefreshTokenRepository);
exports.RefreshTokenRepository = RefreshTokenRepository;
//# sourceMappingURL=refresh-token.repository.js.map