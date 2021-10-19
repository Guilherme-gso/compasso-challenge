import { v4 as uuid } from 'uuid'
import { Like } from 'typeorm'
import { PgConnection } from '@/infra/typeorm/helpers'
import { CreateCityDto } from '@/modules/city/dtos/create-city.dto'
import { CityRepository } from '@/modules/city/repositories/city-repository'
import { City } from '../entities/city'

export class TypeORMCityRepository implements CityRepository {
  constructor(
    private readonly repository = PgConnection.getInstance().getRepository(City)
  ) {}

  async create(cityData: CreateCityDto): Promise<City> {
    const city = this.repository.create({
      ...cityData,
      id: uuid(),
      uf: cityData.uf.toUpperCase()
    })
    await this.repository.save(city)
    return city
  }

  async findByName(cityName: string): Promise<City | undefined> {
    return this.repository.findOne({ where: { name: Like(`%${cityName}%`) } })
  }

  async findByUf(uf: string): Promise<City[]> {
    return this.repository.find({ where: { uf } })
  }
}
