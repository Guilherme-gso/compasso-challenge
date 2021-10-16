import { v4 as uuid } from 'uuid'
import { PgConnection } from '@/infra/typeorm/helpers'
import { CreateCityDto } from '@/modules/city/dtos/create-city.dto'
import { CityRepository } from '@/modules/city/repositories/city-repository'
import { City } from '../entities/city'

export class TypeORMCityRepository implements CityRepository {
  constructor(
    private readonly repository = PgConnection.getInstance().getRepository(City)
  ) {}

  async create(cityData: CreateCityDto): Promise<City> {
    const city = this.repository.create({ ...cityData, id: uuid() })
    await this.repository.save(city)
    return city
  }
}
