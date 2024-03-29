"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestionVotantesApplication = void 0;
const tslib_1 = require("tslib");
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const rest_explorer_1 = require("@loopback/rest-explorer");
const service_proxy_1 = require("@loopback/service-proxy");
const dotenv = tslib_1.__importStar(require("dotenv"));
const dotenvExt = tslib_1.__importStar(require("dotenv-extended"));
const loopback4_authentication_1 = require("loopback4-authentication");
const loopback4_authorization_1 = require("loopback4-authorization");
const path = tslib_1.__importStar(require("path"));
const auth_1 = require("./modules/auth");
const sequence_1 = require("./sequence");
class GestionVotantesApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        dotenv.config();
        dotenvExt.load({
            schema: '.env.example',
            errorOnMissing: false,
        });
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path.join(__dirname, '../public'));
        // // Customize @loopback/rest-explorer configuration here
        this.bind(rest_explorer_1.RestExplorerBindings.CONFIG).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        // Add authentication component
        this.component(loopback4_authentication_1.AuthenticationComponent);
        // Customize authentication verify handlers
        this.bind(loopback4_authentication_1.Strategies.Passport.OAUTH2_CLIENT_PASSWORD_VERIFIER).toProvider(auth_1.ClientPasswordVerifyProvider);
        this.bind(loopback4_authentication_1.Strategies.Passport.LOCAL_PASSWORD_VERIFIER).toProvider(auth_1.LocalPasswordVerifyProvider);
        this.bind(loopback4_authentication_1.Strategies.Passport.BEARER_TOKEN_VERIFIER).toProvider(auth_1.BearerTokenVerifyProvider);
        this.bind(loopback4_authentication_1.Strategies.Passport.RESOURCE_OWNER_PASSWORD_VERIFIER).toProvider(auth_1.ResourceOwnerVerifyProvider);
        this.bind(loopback4_authentication_1.Strategies.Passport.GOOGLE_OAUTH2_VERIFIER).toProvider(auth_1.GoogleOauth2VerifyProvider);
        // Add authorization component
        this.bind(loopback4_authorization_1.AuthorizationBindings.CONFIG).to({
            allowAlwaysPaths: ['/explorer'],
        });
        this.component(loopback4_authorization_1.AuthorizationComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers', 'modules'],
                extensions: ['.controller.js'],
                nested: true,
            },
            repositories: {
                dirs: ['repositories'],
                extensions: ['.repository.js'],
                nested: true,
            },
        };
    }
}
exports.GestionVotantesApplication = GestionVotantesApplication;
//# sourceMappingURL=application.js.map