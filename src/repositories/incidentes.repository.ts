import {DefaultCrudRepository} from '@loopback/repository';
import {Incidentes, IncidentesRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class IncidentesRepository extends DefaultCrudRepository<
  Incidentes,
  typeof Incidentes.prototype.id,
  IncidentesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Incidentes, dataSource);
  }
}
