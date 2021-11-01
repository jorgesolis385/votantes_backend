import { juggler } from '@loopback/repository';
export declare class PgdbDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
