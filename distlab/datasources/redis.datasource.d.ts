import { juggler } from '@loopback/repository';
export declare class RedisDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
