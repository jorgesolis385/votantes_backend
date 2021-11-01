"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = tslib_1.__importStar(require("./redis.datasource.config.json"));
let RedisDataSource = class RedisDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = Object.assign({}, config)) {
        // Override data source config from environment variables
        Object.assign(dsConfig, {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            password: process.env.REDIS_PASSWORD,
            db: process.env.REDIS_DATABASE,
            url: process.env.REDIS_URL,
        });
        super(dsConfig);
    }
};
RedisDataSource.dataSourceName = 'redis';
RedisDataSource = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.config.redis', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], RedisDataSource);
exports.RedisDataSource = RedisDataSource;
//# sourceMappingURL=redis.datasource.js.map