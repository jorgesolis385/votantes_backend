"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgdbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = tslib_1.__importStar(require("./pgdb.datasource.config.json"));
let PgdbDataSource = class PgdbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = Object.assign({}, config)) {
        // Override data source config from environment variables
        Object.assign(dsConfig, {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            schema: process.env.DB_SCHEMA,
        });
        super(dsConfig);
    }
};
PgdbDataSource.dataSourceName = 'pgdb';
PgdbDataSource = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.config.pgdb', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], PgdbDataSource);
exports.PgdbDataSource = PgdbDataSource;
//# sourceMappingURL=pgdb.datasource.js.map