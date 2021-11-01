import { DefaultKeyValueRepository } from '@loopback/repository';
import { RedisDataSource } from '../datasources';
import { RefreshToken } from '../models';
export declare class RefreshTokenRepository extends DefaultKeyValueRepository<RefreshToken> {
    constructor(dataSource: RedisDataSource);
}
