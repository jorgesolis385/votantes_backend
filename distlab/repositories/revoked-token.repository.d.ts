import { DefaultKeyValueRepository } from '@loopback/repository';
import { RedisDataSource } from '../datasources';
import { RevokedToken } from '../models';
export declare class RevokedTokenRepository extends DefaultKeyValueRepository<RevokedToken> {
    constructor(dataSource: RedisDataSource);
}
