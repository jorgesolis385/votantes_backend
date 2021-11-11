import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Personas,
  UserTenant,
} from '../models';
import {PersonasRepository} from '../repositories';

export class PersonasUserTenantController {
  constructor(
    @repository(PersonasRepository)
    public personasRepository: PersonasRepository,
  ) { }

  @get('/personas/{id}/user-tenant', {
    responses: {
      '200': {
        description: 'UserTenant belonging to Personas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(UserTenant)},
          },
        },
      },
    },
  })
  async getUserTenant(
    @param.path.string('id') id: typeof Personas.prototype.cedula,
  ): Promise<UserTenant> {
    return this.personasRepository.userTenant(id);
  }
}
