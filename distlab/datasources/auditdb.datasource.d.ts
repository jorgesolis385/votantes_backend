import { juggler } from '@loopback/repository';
export declare class AuditdbDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
