"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApplication = void 0;
const __1 = require("../..");
const testlab_1 = require("@loopback/testlab");
const loopback4_authentication_1 = require("loopback4-authentication");
async function setupApplication() {
    const restConfig = testlab_1.givenHttpServerConfig({
    // Customize the server configuration here.
    // Empty values (undefined, '') will be ignored by the helper.
    //
    // host: process.env.HOST,
    // port: +process.env.PORT,
    });
    const app = new __1.GestionVotantesApplication({
        rest: restConfig,
    });
    await app.boot();
    app.bind('datasources.config.pgdb').to({
        name: 'pgdb',
        connector: 'memory',
    });
    app.bind(loopback4_authentication_1.AuthenticationBindings.CURRENT_USER).to({
        id: 1,
        username: 'test_user',
        password: process.env.USER_TEMP_PASSWORD,
    });
    await app.start();
    const client = testlab_1.createRestAppClient(app);
    return { app, client };
}
exports.setupApplication = setupApplication;
//# sourceMappingURL=test-helper.js.map