import {Entity, model, property, belongsTo} from '@loopback/repository';
import {UserTenant} from './user-tenant.model';

@model({settings: {strict: false}})
export class Personas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  cedula: string;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  puesto_votacion: string;

  @property({
    type: 'number',
    required: true,
  })
  mesa: number;

  @property({
    type: 'string',
    required: true,
  })
  ciudad_puesto: string;

  @property({
    type: 'string',
    required: true,
  })
  departamento_puesto: string;

  @property({
    type: 'string',
  })
  ciudad_residencia?: string;

  @property({
    type: 'string',
  })
  departamento_residencia?: string;

  @property({
    type: 'string',
  })
  direccion?: string;

  @property({
    type: 'string',
  })
  telefono?: string;

  @property({
    type: 'string',
  })
  ocupacion?: string;

  @property({
    type: 'string',
  })
  profesion?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  is_lider?: boolean;

  @property({
    type: 'string',
  })
  referenciado?: string;

  @belongsTo(() => UserTenant)
  userTenantId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Personas>) {
    super(data);
  }
}

export interface PersonasRelations {
  // describe navigational properties here
}

export type PersonasWithRelations = Personas & PersonasRelations;
