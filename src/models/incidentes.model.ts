import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Incidentes extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
    generated: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  autor: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  comentarios?: string[];

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaReporte: string;

  @property({
    type: 'string',
  })
  impacto?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  investigadores?: string[];

  @property({
    type: 'string',
  })
  nombre?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Incidentes>) {
    super(data);
  }
}

export interface IncidentesRelations {
  // describe navigational properties here
}

export type IncidentesWithRelations = Incidentes & IncidentesRelations;
