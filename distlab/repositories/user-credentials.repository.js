"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCredentialsRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
const default_soft_crud_repository_base_1 = require("./default-soft-crud.repository.base");
let UserCredentialsRepository = class UserCredentialsRepository extends default_soft_crud_repository_base_1.DefaultSoftCrudRepository {
    constructor(dataSource) {
        super(models_1.UserCredentials, dataSource);
    }
};
UserCredentialsRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.pgdb')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PgdbDataSource])
], UserCredentialsRepository);
exports.UserCredentialsRepository = UserCredentialsRepository;
//# sourceMappingURL=user-credentials.repository.js.map