"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftCrudRepository = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./audit-log.repository"), exports);
var loopback4_soft_delete_1 = require("loopback4-soft-delete");
Object.defineProperty(exports, "SoftCrudRepository", { enumerable: true, get: function () { return loopback4_soft_delete_1.SoftCrudRepository; } });
tslib_1.__exportStar(require("./user.repository"), exports);
tslib_1.__exportStar(require("./role.repository"), exports);
tslib_1.__exportStar(require("./tenant.repository"), exports);
tslib_1.__exportStar(require("./user-tenant-permission.repository"), exports);
tslib_1.__exportStar(require("./user-tenant.repository"), exports);
tslib_1.__exportStar(require("./refresh-token.repository"), exports);
tslib_1.__exportStar(require("./auth-client.repository"), exports);
tslib_1.__exportStar(require("./revoked-token.repository"), exports);
tslib_1.__exportStar(require("./user-credentials.repository"), exports);
//# sourceMappingURL=index.js.map