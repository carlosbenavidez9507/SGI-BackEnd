import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Lecciones extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
    generated: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  contenido?: string;

  @property({
    type: 'date',
  })
  fechaPublicacion?: string;

  @property({
    type: 'string',
  })
  nombre?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Lecciones>) {
    super(data);
  }
}

export interface LeccionesRelations {
  // describe navigational properties here
}

export type LeccionesWithRelations = Lecciones & LeccionesRelations;
