import {DefaultCrudRepository} from '@loopback/repository';
import {Lecciones, LeccionesRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LeccionesRepository extends DefaultCrudRepository<
  Lecciones,
  typeof Lecciones.prototype.id,
  LeccionesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Lecciones, dataSource);
  }
}
