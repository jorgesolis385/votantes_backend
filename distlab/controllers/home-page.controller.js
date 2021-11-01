"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageController = void 0;
const tslib_1 = require("tslib");
const openapi_v3_1 = require("@loopback/openapi-v3");
const fs = tslib_1.__importStar(require("fs"));
const path = tslib_1.__importStar(require("path"));
const context_1 = require("@loopback/context");
const rest_1 = require("@loopback/rest");
const loopback4_authorization_1 = require("loopback4-authorization");
let HomePageController = class HomePageController {
    constructor(response) {
        this.response = response;
        this.html = fs.readFileSync(path.join(__dirname, '../../public/index.html'), 'utf-8');
    }
    homePage() {
        this.response.status(200 /* OK */).contentType('html').send(this.html);
        return this.response;
    }
};
tslib_1.__decorate([
    loopback4_authorization_1.authorize({ permissions: ['*'] }),
    openapi_v3_1.get('/', {
        responses: {
            [200 /* OK */]: {
                description: 'Home Page',
                content: { 'text/html': { schema: { type: 'string' } } },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], HomePageController.prototype, "homePage", null);
HomePageController = tslib_1.__decorate([
    tslib_1.__param(0, context_1.inject(rest_1.RestBindings.Http.RESPONSE)),
    tslib_1.__metadata("design:paramtypes", [Object])
], HomePageController);
exports.HomePageController = HomePageController;
//# sourceMappingURL=home-page.controller.js.map