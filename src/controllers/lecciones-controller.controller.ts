import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Lecciones} from '../models';
import {LeccionesRepository} from '../repositories';

export class LeccionesControllerController {
  constructor(
    @repository(LeccionesRepository)
    public leccionesRepository : LeccionesRepository,
  ) {}

  @post('/lecciones', {
    responses: {
      '200': {
        description: 'Lecciones model instance',
        content: {'application/json': {schema: getModelSchemaRef(Lecciones)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lecciones, {exclude: ['id']}),
        },
      },
    })
    lecciones: Omit<Lecciones, 'id'>,
  ): Promise<Lecciones> {
    return this.leccionesRepository.create(lecciones);
  }

  @get('/lecciones/count', {
    responses: {
      '200': {
        description: 'Lecciones model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Lecciones)) where?: Where<Lecciones>,
  ): Promise<Count> {
    return this.leccionesRepository.count(where);
  }

  @get('/lecciones', {
    responses: {
      '200': {
        description: 'Array of Lecciones model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Lecciones)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Lecciones)) filter?: Filter<Lecciones>,
  ): Promise<Lecciones[]> {
    return this.leccionesRepository.find(filter);
  }

  @patch('/lecciones', {
    responses: {
      '200': {
        description: 'Lecciones PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lecciones, {partial: true}),
        },
      },
    })
    lecciones: Lecciones,
    @param.query.object('where', getWhereSchemaFor(Lecciones)) where?: Where<Lecciones>,
  ): Promise<Count> {
    return this.leccionesRepository.updateAll(lecciones, where);
  }

  @get('/lecciones/{id}', {
    responses: {
      '200': {
        description: 'Lecciones model instance',
        content: {'application/json': {schema: getModelSchemaRef(Lecciones)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Lecciones> {
    return this.leccionesRepository.findById(id);
  }

  @patch('/lecciones/{id}', {
    responses: {
      '204': {
        description: 'Lecciones PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lecciones, {partial: true}),
        },
      },
    })
    lecciones: Lecciones,
  ): Promise<void> {
    await this.leccionesRepository.updateById(id, lecciones);
  }

  @put('/lecciones/{id}', {
    responses: {
      '204': {
        description: 'Lecciones PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() lecciones: Lecciones,
  ): Promise<void> {
    await this.leccionesRepository.replaceById(id, lecciones);
  }

  @del('/lecciones/{id}', {
    responses: {
      '204': {
        description: 'Lecciones DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.leccionesRepository.deleteById(id);
  }
}
