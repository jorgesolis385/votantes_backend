import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Personas} from '../../models';
import {PersonasRepository} from '../../repositories';
import {authenticate, STRATEGY} from 'loopback4-authentication';
import {authorize} from 'loopback4-authorization';
import {PermissionKey} from '../auth/permission-key.enum';
export class PersonaController {
  constructor(
    @repository(PersonasRepository)
    public personasRepository : PersonasRepository,
  ) {}

  @post('/personas')
  @response(200, {
    description: 'Personas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Personas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personas, {
            title: 'NewPersonas',
            
          }),
        },
      },
    })
    personas: Personas,
  ): Promise<Personas> {
    return this.personasRepository.create(personas);
  }

  @get('/personas/count')
  @response(200, {
    description: 'Personas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Personas) where?: Where<Personas>,
  ): Promise<Count> {
    return this.personasRepository.count(where);
  }
  @authenticate(STRATEGY.BEARER)
  @authorize({permissions: [PermissionKey.CreateRole]})
  @get('/personas')
  @response(200, {
    description: 'Array of Personas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Personas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Personas) filter?: Filter<Personas>,
  ): Promise<Personas[]> {
    return this.personasRepository.find(filter);
  }

  @patch('/personas')
  @response(200, {
    description: 'Personas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personas, {partial: true}),
        },
      },
    })
    personas: Personas,
    @param.where(Personas) where?: Where<Personas>,
  ): Promise<Count> {
    return this.personasRepository.updateAll(personas, where);
  }

  @get('/personas/{id}')
  @response(200, {
    description: 'Personas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Personas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Personas, {exclude: 'where'}) filter?: FilterExcludingWhere<Personas>
  ): Promise<Personas> {
    return this.personasRepository.findById(id, filter);
  }

  @patch('/personas/{id}')
  @response(204, {
    description: 'Personas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personas, {partial: true}),
        },
      },
    })
    personas: Personas,
  ): Promise<void> {
    await this.personasRepository.updateById(id, personas);
  }

  @put('/personas/{id}')
  @response(204, {
    description: 'Personas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() personas: Personas,
  ): Promise<void> {
    await this.personasRepository.replaceById(id, personas);
  }

  @del('/personas/{id}')
  @response(204, {
    description: 'Personas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.personasRepository.deleteById(id);
  }
}
