import {inject, Getter} from '@loopback/core';
import {PgdbDataSource} from '../datasources';
import {Personas, PersonasRelations, UserTenant} from '../models';
import {DefaultSoftCrudRepository} from './default-soft-crud.repository.base';
import {repository, BelongsToAccessor} from '@loopback/repository';
import {UserTenantRepository} from './user-tenant.repository';

export class PersonasRepository extends DefaultSoftCrudRepository<
  Personas,
  typeof Personas.prototype.cedula,
  PersonasRelations
> {

  public readonly userTenant: BelongsToAccessor<UserTenant, typeof Personas.prototype.cedula>;

  constructor(
    @inject('datasources.pgdb') dataSource: PgdbDataSource, @repository.getter('UserTenantRepository') protected userTenantRepositoryGetter: Getter<UserTenantRepository>,
  ) {
    super(Personas, dataSource);
    this.userTenant = this.createBelongsToAccessorFor('userTenant', userTenantRepositoryGetter,);
    this.registerInclusionResolver('userTenant', this.userTenant.inclusionResolver);
  }
}
